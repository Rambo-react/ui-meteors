import { ComponentPropsWithoutRef } from 'react'

import sprite from './icons/sprite.svg'

export type IconProps = {
  color?: string
  height?: number
  id: string
  stroke?: string
  viewBox?: string
  width?: number
} & ComponentPropsWithoutRef<'svg'>

export const Icon = (props: IconProps) => {
  const { color, height, id, stroke, viewBox, width, ...rest } = props

  return (
    <svg
      fill={color}
      height={height}
      stroke={stroke}
      viewBox={viewBox || `0 0 ${width} ${height}`}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  )
}
