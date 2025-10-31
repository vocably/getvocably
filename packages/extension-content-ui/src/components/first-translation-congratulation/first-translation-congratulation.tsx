import '@sneas/telephone';
import { Component, h, Host, Prop } from '@stencil/core';
import { TranslationCard } from '@vocably/model';
import { explode } from '@vocably/sulna';

@Component({
  tag: 'vocably-first-translation-congratulation',
  styleUrl: 'first-translation-congratulation.scss',
  shadow: true,
})
export class VocablyFirstTranslationCongratulation {
  @Prop() card: TranslationCard;
  render() {
    const examples = explode(this.card.data.example ?? '');
    return (
      <Host>
        <div class="row">
          <div class="col">
            <iphone-16-max class="phone">
              <div class="phone-contents-wrapper">
                <div class="phone-contents">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      flexWrap: 'wrap',
                      columnGap: '4px',
                    }}
                  >
                    <div class="emphasize small">{this.card.data.source}</div>
                    {this.card.data.ipa && (
                      <div class="small">[{this.card.data.ipa}]</div>
                    )}
                    {this.card.data.g && (
                      <div class="small">({this.card.data.g})</div>
                    )}
                    {this.card.data.partOfSpeech && (
                      <div class="small">{this.card.data.partOfSpeech}</div>
                    )}
                  </div>
                  {examples.length === 1 && (
                    <div class="small">{examples[0]}</div>
                  )}
                  {examples.length > 1 && (
                    <ul class="small vocably-list">
                      {examples.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  )}
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
