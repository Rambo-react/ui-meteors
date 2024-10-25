import { ComponentPropsWithoutRef } from 'react'

import sprite from './icons/sprite.svg'

export type IconProps = {
  height: number
  id: string
  viewBox?: string
  width: number
} & ComponentPropsWithoutRef<'svg'>

export const Icon = (props: IconProps) => {
  const { height, id, viewBox, width, ...rest } = props

  return (
    <svg
      height={height}
      viewBox={viewBox || `0 0 ${width} ${height}`}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  )
}
