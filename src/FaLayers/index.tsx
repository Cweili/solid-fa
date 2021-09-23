import {
  createMemo,
  JSX,
} from 'solid-js'

import {
  getStyles,
} from '../utils';

import style from './style.module.css'

interface FaLayersProps {
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
  pull?: 'left' | 'right'
  children?: JSX.Element
}

export default function FaLayers (props: FaLayersProps) {
  const s = createMemo(() => getStyles(props.size, props.pull, true))

  return (
    <span
      classList={{
        [style.layers]: true,
      }}
      style={s()}
    >
      {props.children}
    </span>
  )
}
