import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import {
  createMemo,
  mergeProps,
  Show,
} from 'solid-js'

import {
  getStyles,
  getTransform,
} from '../utils';

import style from './style.module.css'

interface SolidFaProps {
  icon: IconDefinition

  size?:
    | 'xs'
    | 'sm'
    | 'lg'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
  color?: string

  fw?: boolean
  pull?: 'left' | 'right'

  scale?: number | string
  translateX?: number | string
  translateY?: number | string
  rotate?: number | string
  flip?: 'horizontal' | 'vertical' | 'both'

  spin?: boolean
  pulse?: boolean

  class?: string
  classList?: {
      [k: string]: boolean | undefined
  } | undefined

  // Duotone Icons
  primaryColor?: string
  secondaryColor?: string
  primaryOpacity?: number | string
  secondaryOpacity?: number | string
  swapOpacity?: boolean
}


export default function Fa (props: SolidFaProps) {
  props = mergeProps({
    scale: 1,
    translateX: 0,
    translateY: 0,
    primaryOpacity: 1,
    secondaryOpacity: 0.4,
  }, props)

  const i = createMemo(() => props.icon?.icon || [0, 0, '', [], ''])
  const s = createMemo(() => getStyles(props.size, props.pull, props.fw))
  const transform = createMemo(() => getTransform(props.scale, props.translateX, props.translateY, props.rotate, props.flip, 512))

  return (
    <svg
      classList={{
        'solid-fa': true,
        [style.spin]: props.spin,
        [style.pulse]: props.pulse,
        ...props.classList
      }}
      class={props.class}
      style={s()}
      viewBox={`0 0 ${i()[0]} ${i()[1]}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        transform={`translate(${i()[0] / 2} ${i()[1] / 2})`}
        transform-origin={`${i()[0] / 4} 0`}
      >
        <g transform={transform()}>
          <Show
            when={typeof i()[4] === 'string'}
            fallback={(
              <>
                <path
                  d={i()[4][0]}
                  fill={props.secondaryColor || props.color || 'currentColor'}
                  fill-opacity={props.swapOpacity != false ? props.primaryOpacity : props.secondaryOpacity}
                  transform={`translate(${i()[0] / -2} ${i()[1] / -2})`}
                />
                <path
                  d={i()[4][1]}
                  fill={props.primaryColor || props.color || 'currentColor'}
                  fill-opacity={props.swapOpacity != false ? props.secondaryOpacity : props.primaryOpacity}
                  transform={`translate(${i()[0] / -2} ${i()[1] / -2})`}
                />
              </>
            )}
          >
            <path
              d={i()[4] as string}
              fill={props.color || props.primaryColor || 'currentColor'}
              transform={`translate(${i()[0] / -2} ${i()[1] / -2})`}
            />
          </Show>
        </g>
      </g>
    </svg>
  )
}
