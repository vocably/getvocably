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
  tag: 'vocably-card-countdown',
  styleUrl: 'card-countdown.scss',
  shadow: false,
})
export class VocablyCardCountdown {
  @Element() element!: HTMLVocablyCardCountdownElement;

  @Prop() number: number;
  @Prop() maxCards: number = 30;
  @Prop() paymentLink: string = '';

  private explanation!: HTMLVocablyCardCountdownExplanationElement;

  showExplanation() {
    const { right, top } = this.element.getBoundingClientRect();
    this.explanation.style.right = `${
      window.innerWidth + window.scrollX - right
    }px`;
    this.explanation.style.top = `${top + window.scrollY}px`;

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

    setTimeout(() => {
      this.element.appendChild(this.explanation);
    }, 200);
  }

  render() {
    return (
      <Fragment>
        <button
          class="vocably-card-countdown-button"
          onClick={() => this.showExplanation()}
        >
          <span class="vocably-card-countdown-previous">{this.number + 1}</span>
          <span class="vocably-card-countdown-current">{this.number}</span>
        </button>
        <vocably-card-countdown-explanation
          onCloseExplanation={() => this.hideExplanation()}
          style={explanationHiddenStyles}
          ref={(el) =>
            (this.explanation =
              el as HTMLVocablyCardCountdownExplanationElement)
          }
        ></vocably-card-countdown-explanation>
      </Fragment>
    );
  }
}
