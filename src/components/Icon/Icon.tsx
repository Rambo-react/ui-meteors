import { ComponentPropsWithoutRef } from 'react'

import sprite from './icons/sprite.svg'

type Props = {
  color?: string
  height?: number
  id: string
  stroke?: string
  viewBox?: string
  width?: number
} & ComponentPropsWithoutRef<'svg'>

export const Icon = ({ color, height, id, stroke, viewBox, width, ...rest }: Props) => {
  return (
    <svg
      fill={color}
      height={height}
      stroke={stroke}
      viewBox={viewBox || `0 0 24 24`}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  )
}
