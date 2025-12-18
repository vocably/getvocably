import { Component, Fragment, h, Prop } from '@stencil/core';
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
        {examples.length === 1 && <Fragment>{examples[0]}</Fragment>}
        {examples.length > 1 && (
          <ul class="vocably-list">
            {examples.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
