import React, { forwardRef, useRef } from 'react'
import { IMask, useIMask } from 'react-imask'

import { Input } from '../Input'

type Props = {
  className?: string
  disabled?: boolean
  onBlur?: () => void
  onChange?: (value: string) => void
  placeholder?: string
  value?: string
}

export const MaskedInput = forwardRef<HTMLInputElement, Props>(props => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { ref: imaskRef } = useIMask({
    autofix: true,
    blocks: {
      d: { from: 1, mask: IMask.MaskedRange, to: 31 },
      m: { from: 1, mask: IMask.MaskedRange, to: 12 },
      y: { from: 1900, mask: IMask.MaskedRange, to: 2100 },
    },
    mask: 'dd.mm.yyyy',
    onAccept: (value: string) => {
      if (props.onChange) {
        props.onChange(value)
      }
    },
    overwrite: true,
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value)
    }
  }

  // Связываем inputRef с imaskRef
  React.useEffect(() => {
    if (inputRef.current && imaskRef.current) {
      inputRef.current = imaskRef.current as HTMLInputElement
    }
  }, [imaskRef])

  return <Input {...props} onChange={handleChange} ref={inputRef} />
})
