import { Component, h, Prop } from '@stencil/core';
import { explode } from '@vocably/sulna';

@Component({
  tag: 'vocably-card-examples',
  styleUrl: 'card-examples.scss',
  shadow: false,
})
export class VocablyCardExamples {
  @Prop() example: string;
  render() {
    const examples = explode(this.example);

    return (
      <div>
        {examples.length === 1 && (
          <vocably-translated-line line={examples[0]}></vocably-translated-line>
        )}
        {examples.length > 1 && (
          <ul class="vocably-list">
            {examples.map((item) => (
              <li>
                <vocably-translated-line line={item}></vocably-translated-line>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
