import type { ComponentInterface } from '@stencil/core';
import { Component, h, Host, Prop } from '@stencil/core';

import type { SpinnerConfig } from './inline-loader-interface';

// This component is copied from https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/spinner/spinner.tsx

@Component({
  tag: 'vocably-inline-loader',
  styleUrl: 'inline-loader.scss',
  shadow: true,
})
export class VocablyInlineLoader implements ComponentInterface {
  /**
   * Duration of the spinner animation in milliseconds. The default varies based on the spinner.
   */
  @Prop() duration?: number;

  /**
   * If `true`, the spinner's animation will be paused.
   */
  @Prop() paused = false;

  render() {
    const self = this;
    const spinner = {
      dur: 750,
      circles: 3,
      fn: (_: number, index: number) => {
        const animationDelay = -(110 * index) + 'ms';
        return {
          r: 6,
          style: {
            left: `${32 - 32 * index}%`,
            'animation-delay': animationDelay,
          },
        };
      },
    };
    const duration =
      typeof self.duration === 'number' && self.duration > 10
        ? self.duration
        : spinner.dur;
    const svgs: SVGElement[] = [];

    for (let i = 0; i < spinner.circles; i++) {
      svgs.push(buildCircle(spinner, duration, i, spinner.circles));
    }

    return (
      <Host class="spinner-dots" role="progressbar" style={{}}>
        {svgs}
      </Host>
    );
  }
}

const buildCircle = (
  spinner: SpinnerConfig,
  duration: number,
  index: number,
  total: number
) => {
  const data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';

  return (
    <svg viewBox={data.viewBox || '0 0 64 64'} style={data.style}>
      <circle
        transform={data.transform || 'translate(32,32)'}
        cx={data.cx}
        cy={data.cy}
        r={data.r}
        style={
          spinner.elmDuration ? { animationDuration: duration + 'ms' } : {}
        }
      />
    </svg>
  );
};
