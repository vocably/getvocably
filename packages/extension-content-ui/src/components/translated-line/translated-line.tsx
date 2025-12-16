import { Component, h, Host, Prop } from '@stencil/core';
import { extractTranslation } from '@vocably/sulna';

@Component({
  tag: 'vocably-translated-line',
  styleUrl: 'translated-line.scss',
  shadow: true,
})
export class VocablyTranslatedLine {
  @Prop() line: string;

  render() {
    const [text, translation] = extractTranslation(this.line);

    console.log('translation', translation);

    return (
      <Host>
        <span>{text}</span>
        {translation && <span class="translation">{translation}</span>}
      </Host>
    );
  }
}
