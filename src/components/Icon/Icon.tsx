import { ComponentPropsWithoutRef } from 'react'

import sprite from './icons/sprite.svg'

type Props = {
  id: string
} & ComponentPropsWithoutRef<'svg'>

export const Icon = ({ id, viewBox, ...rest }: Props) => {
  return (
    <svg
      viewBox={viewBox || `0 0 24 24`}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  )
}
