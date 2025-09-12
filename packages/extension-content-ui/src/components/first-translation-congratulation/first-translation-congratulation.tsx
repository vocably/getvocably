import '@sneas/telephone';
import { Component, h, Host, Prop } from '@stencil/core';
import { TranslationCard } from '@vocably/model';

@Component({
  tag: 'vocably-first-translation-congratulation',
  styleUrl: 'first-translation-congratulation.scss',
  shadow: true,
})
export class VocablyFirstTranslationCongratulation {
  @Prop() card: TranslationCard;
  render() {
    return (
      <Host>
        <div class="row">
          <div class="col">
            <iphone-16-max class="phone">
              <div class="phone-contents-wrapper">
                <div class="phone-contents">
                  <div class="emphasize small">{this.card.data.source}</div>
                </div>
              </div>
            </iphone-16-max>
          </div>
          <div class="col">
            <p>
              <span class="emphasize">{this.card.data.source}</span> is already
              on your phone.
            </p>
            <p>Scan the QR code to learn it.</p>
            <vocably-qr-code style={{ width: '200px' }}></vocably-qr-code>
          </div>
        </div>
      </Host>
    );
  }
}
