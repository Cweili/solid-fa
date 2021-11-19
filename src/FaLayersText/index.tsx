import {
  createMemo,
  mergeProps,
  JSX,
} from 'solid-js'

import {
  getStyles,
  getTransform,
} from '../utils';

interface FaLayersTextProps {
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

  scale?: number | string
  translateX?: number | string
  translateY?: number | string
  rotate?: number | string
  flip?: 'horizontal' | 'vertical' | 'both'

  children?: JSX.Element
}

export default function FaLayersText (props: FaLayersTextProps) {
  props = mergeProps({
    scale: 1,
    translateX: 0,
    translateY: 0,
  }, props)

  const s = createMemo(() => ({
    ...getStyles(props.size),
    ...{
      color: props.color,
      display: 'inline-block',
      height: 'auto',
      transform: getTransform(
        props.scale,
        props.translateX,
        props.translateY,
        props.rotate,
        props.flip,
        undefined,
        'em',
        'deg',
      ),
    }
  }))

  return (
    <span className='solid-fa-layers-text'>
      <span style={s()}>
        {props.children}
      </span>
    </span>
  )
}
