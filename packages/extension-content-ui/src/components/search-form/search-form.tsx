import {
  Component,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import { GoogleLanguage, languageList } from '@vocably/model';
import { sortLanguages } from '../translation/sortLanguages';

const article = (phrase: string) => {
  if (
    ['a', 'e', 'i', 'o', 'y', 'u'].includes((phrase.at(0) ?? '').toLowerCase())
  ) {
    return 'an';
  } else {
    return 'a';
  }
};

export type SearchValues = {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
  isReversed: boolean;
};

@Component({
  tag: 'vocably-search-form',
  styleUrl: 'search-form.scss',
  shadow: true,
})
export class VocablySearchForm {
  @Prop() loading: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() existingSourceLanguages: GoogleLanguage[] = [];
  @Prop() existingTargetLanguages: GoogleLanguage[] = [];
  @Prop() hideHint: boolean = false;
  @Prop() autoFocus: boolean = false;

  @Prop() values: SearchValues = {
    text: '',
    sourceLanguage: 'de',
    targetLanguage: 'en',
    isReversed: false,
  };
  @Event() valuesChange: EventEmitter<SearchValues>;
  @Event() formSubmit: EventEmitter<SearchValues>;

  @State() textInputFocused: boolean = false;

  private textInput: HTMLInputElement | undefined = undefined;

  componentDidLoad() {
    if (this.autoFocus) {
      setTimeout(() => {
        this.textInput?.focus();
      }, 300);
    }
  }

  languageName(languageCode: string): string {
    // @ts-ignore
    return languageList[languageCode] ?? '';
  }

  getPlaceholderText(): string {
    if (!this.values.sourceLanguage || !this.values.targetLanguage) {
      return '';
    }

    const sourceLanguageName = this.languageName(this.values.sourceLanguage);
    const targetLanguageName = this.languageName(this.values.targetLanguage);

    if (this.values.isReversed) {
      return `Enter ${article(
        targetLanguageName
      )} ${targetLanguageName} word or phrase here. ${sourceLanguageName} cards will be created.`;
    }

    return `Enter any word or phrase here.`;
  }

  render() {
    return (
      <Host>
        <form
          class="form"
          onSubmit={(e) => {
            e.preventDefault();
            this.formSubmit.emit(this.values);
          }}
          aria-label="Search form"
        >
          <div class="preset">
            <vocably-hint-selector
              class="language"
              hint={'I study'}
              shrinkSmall={true}
              disabled={this.loading || this.disabled}
              onChoose={(event) =>
                this.valuesChange.emit({
                  ...this.values,
                  sourceLanguage: event.detail,
                })
              }
              value={this.values.sourceLanguage}
              optionGroups={[
                [
                  '',
                  Object.entries(languageList).sort(
                    sortLanguages(this.existingSourceLanguages)
                  ),
                ],
              ]}
            ></vocably-hint-selector>
            <div>
              <button
                type="button"
                class={{ direction: true, reversed: this.values.isReversed }}
                onClick={() =>
                  this.valuesChange.emit({
                    ...this.values,
                    isReversed: !this.values.isReversed,
                  })
                }
              >
                <vocably-icon-arrow-right class="icon"></vocably-icon-arrow-right>
              </button>
            </div>
            <vocably-hint-selector
              class={'language'}
              hint={'I speak'}
              shrinkSmall={true}
              disabled={this.loading || this.disabled}
              onChoose={(event) =>
                this.valuesChange.emit({
                  ...this.values,
                  targetLanguage: event.detail,
                })
              }
              value={this.values.targetLanguage}
              optionGroups={[
                [
                  '',
                  Object.entries(languageList).sort(
                    sortLanguages(this.existingTargetLanguages)
                  ),
                ],
              ]}
            ></vocably-hint-selector>
          </div>
          <div class="search-input">
            <input
              ref={(el) => {
                this.textInput = el;
              }}
              autocomplete="off"
              aria-haspopup="false"
              autocapitalize="off"
              class="input"
              type="text"
              name="searchText"
              placeholder={this.getPlaceholderText()}
              value={this.values.text}
              disabled={this.loading || this.disabled}
              onFocus={() => (this.textInputFocused = true)}
              onBlur={() => (this.textInputFocused = false)}
              onKeyUp={(e) => {
                this.valuesChange.emit({
                  ...this.values,
                  // @ts-ignore
                  text: e.target.value,
                });
              }}
            />
            <button
              class="submit"
              type="submit"
              disabled={this.loading || this.values.text.trim() === ''}
            >
              <vocably-icon-magnify
                class={{
                  magnify: true,
                  animating: this.loading,
                }}
              ></vocably-icon-magnify>
            </button>
          </div>
          {!this.hideHint && (
            <div class="hint">
              {!this.values.isReversed && (
                <Fragment>
                  For the improved search of{' '}
                  {this.languageName(this.values.sourceLanguage)} words in{' '}
                  {this.languageName(this.values.targetLanguage)} click the{' '}
                  <button
                    class="hint-icon-button"
                    type="button"
                    onClick={() => {
                      this.valuesChange.emit({
                        ...this.values,
                        isReversed: true,
                      });
                    }}
                  >
                    <vocably-icon-arrow-right></vocably-icon-arrow-right>
                  </button>{' '}
                  button.
                </Fragment>
              )}
              {this.values.isReversed && (
                <Fragment>
                  Click{' '}
                  <button
                    class="hint-icon-button reversed"
                    type="button"
                    onClick={() => {
                      this.valuesChange.emit({
                        ...this.values,
                        isReversed: false,
                      });
                    }}
                  >
                    <vocably-icon-arrow-right></vocably-icon-arrow-right>
                  </button>{' '}
                  button to search for cards in{' '}
                  {this.languageName(this.values.sourceLanguage)}.
                </Fragment>
              )}
            </div>
          )}
        </form>
      </Host>
    );
  }
}
