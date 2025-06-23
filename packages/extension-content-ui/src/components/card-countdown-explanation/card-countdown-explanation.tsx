import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'vocably-card-countdown-explanation',
  styleUrl: 'card-countdown-explanation.scss',
  shadow: true,
})
export class VocablyCardCountdownExplanation {
  @Prop() maxCards: number = 30;
  @Prop() paymentLink: string = '';

  @Event() closeExplanation: EventEmitter<void>;
  @Event() paymentClicked: EventEmitter<void>;

  private becameVisible: number = 0;

  connectedCallback() {
    this.becameVisible = new Date().getTime();
  }

  onClose = () => {
    if (new Date().getTime() - this.becameVisible < 100) {
      return;
    }

    this.closeExplanation.emit();
  };

  render() {
    return (
      <Host>
        <div class="explanation">
          <button
            onClick={() => this.onClose()}
            class="close-button"
            style={{ right: '8px', top: '8px' }}
            title="Close"
          >
            <vocably-icon-close></vocably-icon-close>
          </button>
          <div style={{ marginRight: '8px' }}>
            The <strong>Free Plan</strong> allows to save up to{' '}
            <strong>{this.maxCards}</strong> cards.
          </div>
          <div>
            After you reached the limit, you will be allowed to save{' '}
            <strong>one card per day</strong>.
          </div>
          <div>
            <a
              href={this.paymentLink}
              target="_blank"
              class="upgrade-button"
              onClick={() => this.paymentClicked.emit()}
            >
              Upgrade to Premium Plan
            </a>
          </div>
        </div>
      </Host>
    );
  }
}
