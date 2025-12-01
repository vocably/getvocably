import { Component, h } from '@stencil/core';

@Component({
  tag: 'vocably-skeleton-loader',
  styleUrl: 'skeleton-loader.scss',
  shadow: true,
})
export class VocablySkeletonLoader {
  render() {
    return (
      <div style={{ paddingLeft: '12px' }}>
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-text" style={{ width: '70%' }}></div>
        <div class="skeleton skeleton-text" style={{ width: '71%' }}></div>
        <div class="skeleton skeleton-text" style={{ width: '69%' }}></div>
        <div class="skeleton skeleton-text" style={{ width: '20%' }}></div>
      </div>
    );
  }
}
