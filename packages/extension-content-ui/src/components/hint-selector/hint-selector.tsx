import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'vocably-hint-selector',
  styleUrl: 'hint-selector.scss',
  shadow: true,
})
export class VocablyLanguageSelector {
  @Element() el: HTMLElement;

  @Prop() shrinkSmall = false;
  @Prop() optionGroups: Array<
    [groupLabel: string, options: Array<[value: string, label: string]>]
  >;
  @Prop() value: string;
  @Prop() hint: string;
  @Prop() disabled = false;

  @Event() choose: EventEmitter<string>;

  private hintElement: HTMLElement | undefined;
  private hintMutationObserver: MutationObserver;

  componentDidLoad() {
    this.observeMutations();
    this.updateHintWidth();
  }

  disconnectedCallback() {
    this.hintMutationObserver?.disconnect();
  }

  private observeMutations() {
    this.hintMutationObserver = new MutationObserver(() => {
      this.updateHintWidth();
    });

    if (!this.hintElement) {
      throw new Error(`Can't find hint element`);
    }

    this.hintMutationObserver.observe(this.hintElement, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  private updateHintWidth() {
    if (this.hintElement) {
      this.el.style.setProperty(
        '--hint-width',
        `${this.hintElement.offsetWidth}px`
      );
    }
  }

  render() {
    return (
      <div
        class={{
          wrapper: true,
          'shrink-small': this.shrinkSmall,
        }}
      >
        <select
          class="vocably-input-select"
          disabled={this.disabled}
          onChange={(event) =>
            this.choose.emit((event.target as HTMLSelectElement).value)
          }
        >
          {this.optionGroups.map(([groupLabel, options]) => (
            <Fragment>
              {groupLabel !== '' && (
                <optgroup label={groupLabel}>
                  {options.map(([value, label]) => (
                    <option value={value} selected={value === this.value}>
                      {label}
                    </option>
                  ))}
                </optgroup>
              )}
              {groupLabel === '' && (
                <Fragment>
                  {options.map(([value, label]) => (
                    <option value={value} selected={value === this.value}>
                      {label}
                    </option>
                  ))}
                </Fragment>
              )}
            </Fragment>
          ))}
        </select>
        <span class={'hint'} ref={(el) => (this.hintElement = el)}>
          {this.hint}
        </span>
      </div>
    );
  }
}
