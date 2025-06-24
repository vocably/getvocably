import { Component, Element, Fragment, h, Prop } from '@stencil/core';

const explanationHiddenStyles = {
  opacity: '0',
  transform: 'translateY(-8px)',
  transition: 'all 0.2s',
  'pointer-events': 'none',
  position: 'absolute',
  zIndex: '2147483647',
};

const explanationVisileStyles = {
  opacity: '1',
  transform: 'translateY(0)',
  'pointer-events': 'auto',
};

@Component({
  tag: 'vocably-card-counter',
  styleUrl: 'card-counter.scss',
  shadow: false,
})
export class VocablyCardCounter {
  @Element() element!: HTMLVocablyCardCounterElement;

  @Prop() collectionLength: number;
  @Prop() maxCards: number = 30;
  @Prop() paymentLink: string = '';

  private explanation!: HTMLVocablyCardCounterExplanationElement;

  private buttonBecameVisible: number = 0;
  private showedOnClick = false;

  connectedCallback() {
    this.buttonBecameVisible = new Date().getTime();
  }

  showExplanation() {
    const { right: buttonRight, top: buttonTop } =
      this.element.getBoundingClientRect();

    if (window.innerWidth > 600) {
      this.explanation.style.right = `${
        window.innerWidth + window.scrollX - buttonRight
      }px`;
    } else {
      this.explanation.style.left = `${window.scrollX + 20}px`;
      this.explanation.style.right = `${window.scrollX + 20}px`;
    }

    this.explanation.style.top = `${buttonTop + window.scrollY}px`;

    const container =
      document.querySelector('vocably-overlay:last-child') || document.body;

    container.appendChild(this.explanation);
    setTimeout(() => {
      for (let [style, value] of Object.entries(explanationVisileStyles)) {
        // @ts-ignore
        this.explanation.style[style] = value;
      }
    }, 0);
  }

  hideExplanation() {
    for (let [style, value] of Object.entries(explanationHiddenStyles)) {
      // @ts-ignore
      this.explanation.style[style] = value;
    }

    this.buttonBecameVisible = new Date().getTime();
    this.showedOnClick = false;

    setTimeout(() => {
      this.element.appendChild(this.explanation);
    }, 200);
  }

  onClick() {
    this.showedOnClick = true;
    this.showExplanation();
  }

  onMouseEnter() {
    if (new Date().getTime() - this.buttonBecameVisible < 200) {
      return;
    }

    this.showExplanation();
  }

  onMouseLeave() {
    if (this.showedOnClick) {
      return;
    }

    this.hideExplanation();
  }

  render() {
    return (
      <Fragment>
        <button
          class="vocably-card-counter-button"
          onClick={() => this.onClick()}
          onTouchStart={() => (this.showedOnClick = true)}
          onMouseEnter={() => this.onMouseEnter()}
        >
          <span class="vocably-card-counter-previous">
            {Number(this.collectionLength) - 1}
          </span>
          <span class="vocably-card-counter-current">
            {this.collectionLength}
          </span>
        </button>
        <vocably-card-counter-explanation
          paymentLink={this.paymentLink}
          maxCards={this.maxCards}
          onCloseExplanation={() => this.hideExplanation()}
          style={explanationHiddenStyles}
          ref={(el) =>
            (this.explanation = el as HTMLVocablyCardCounterExplanationElement)
          }
          onMouseLeave={() => this.onMouseLeave()}
        ></vocably-card-counter-explanation>
      </Fragment>
    );
  }
}
