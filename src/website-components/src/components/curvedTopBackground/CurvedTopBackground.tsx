import React from 'react';
import { useMeasure } from 'react-use';
import { CIRCLES_VARIANT_MAP } from './constants';
import { Props } from './types';

const MOBILE_CURVE_HEIGHT = 62;
const TABLET_CURVE_HEIGHT = 94;
const DESKTOP_SMALL_CURVE_HEIGHT = 153;
const DESKTOP_LARGE_CURVE_HEIGHT = 302;

export function CurvedTopBackground({
  isTopCurveDisabled = false,
  bgFillClassname = 'fill-white',
  isCirclesShown = false,
  circlesVariant = 'DEFAULT',
}: Props) {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  /**
   * There can be multiple instances of CurvedTopBackground in a page.
   * To avoid multiple mask elements using same id attribute, use unique ids.
   */
  const gradientCircles = CIRCLES_VARIANT_MAP[circlesVariant] || [];

  /**
   * TODO: upgrade react version and use useId hook for generating ids
   */
  const maskId = `curve-mask-id`;

  return (
    <div
      ref={ref}
      className={`w-full absolute top-0 -z-10 [--curve-height:var(--mobile-curve-height)] tablet:[--curve-height:var(--tablet-curve-height)] 
                  desktop-sm:[--curve-height:var(--desktop-small-curve-height)] desktop-lg:[--curve-height:var(--desktop-large-curve-height)] pointer-events-none`}
      style={{
        ['--width' as string]: width,
        ['--mobile-curve-height' as string]: isTopCurveDisabled
          ? 0
          : MOBILE_CURVE_HEIGHT,
        ['--tablet-curve-height' as string]: isTopCurveDisabled
          ? 0
          : TABLET_CURVE_HEIGHT,
        ['--desktop-small-curve-height' as string]: isTopCurveDisabled
          ? 0
          : DESKTOP_SMALL_CURVE_HEIGHT,
        ['--desktop-large-curve-height' as string]: isTopCurveDisabled
          ? 0
          : DESKTOP_LARGE_CURVE_HEIGHT,
        height: 'calc(100% + var(--curve-height) * 1px)',
        transform: 'translateY(calc(var(--curve-height) * -1px))',
        ['--4-h-sq' as string]:
          'calc(4px * var(--curve-height) * var(--curve-height))',
        ['--l-sq' as string]: 'calc(1px * var(--width) * var(--width))',
        ['--radius' as string]:
          'calc((var(--4-h-sq) + var(--l-sq)) / (8 * var(--curve-height)))',
      }}
    >
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="blur">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
          {isCirclesShown
            ? gradientCircles.map(circle => {
                return (
                  <mask key={circle.id} id={`blur-${circle.id}`}>
                    <circle
                      cx={(circle.cx / 100) * width}
                      cy={(circle.cy / 100) * height}
                      style={{
                        ['r' as string]: circle.r,
                      }}
                      fill="url(#blur)"
                    />
                  </mask>
                );
              })
            : null}
          <mask id={maskId}>
            <rect x={0} y={0} width={width} height={height} fill="white" />
            <circle
              className="[cy:calc((var(--curve-height)_*_1px)_-_var(--radius))] [r:var(--radius)]"
              cx="50%"
              fill="black"
            />
          </mask>
        </defs>
        <g mask={`url(#${maskId})`}>
          <rect
            className={bgFillClassname}
            x={0}
            y={0}
            height="100%"
            width="100%"
          />
          {isCirclesShown
            ? gradientCircles.map(circle => {
                return (
                  <circle
                    key={circle.id}
                    cx={(circle.cx / 100) * width}
                    cy={(circle.cy / 100) * height}
                    style={{
                      ['r' as string]: circle.r,
                    }}
                    className={circle.fillClassname}
                    mask={`url(#blur-${circle.id})`}
                  />
                );
              })
            : null}
        </g>
      </svg>
    </div>
  );
}
