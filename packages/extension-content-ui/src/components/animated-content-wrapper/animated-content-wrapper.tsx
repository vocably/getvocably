import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'vocably-animated-content-wrapper',
  styleUrl: 'animated-content-wrapper.scss',
  shadow: true,
})
export class VocablyAnimatedContentWrapper {
  @Prop() delay = 0;

  @Element() el: HTMLElement;
  @Event() close: EventEmitter<void>;

  componentDidRender() {
    if (!this.el.shadowRoot) {
      throw new Error('Shadow root property is empty');
    }

    const contentWrapper = this.el.shadowRoot.getElementById('content-wrapper');
    const content = this.el.shadowRoot.getElementById('content');

    if (!content || !contentWrapper) {
      throw new Error(`Can't find content or contentWrapper elements`);
    }

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        const rect = content.getBoundingClientRect();
        contentWrapper.style.height = `${rect.height}px`;
      });
    });

    setTimeout(() => {
      resizeObserver.observe(content);
    }, this.delay);
  }

  render() {
    return (
      <div id="content-wrapper">
        <div id="content">
          <slot></slot>
        </div>
      </div>
    );
  }
}
