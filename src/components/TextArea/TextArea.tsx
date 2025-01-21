import React, { ComponentPropsWithoutRef, useId, useState } from 'react'

import * as Label from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './TextArea.module.scss'

type Props = {
  errorText?: string
  label?: string
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = ({
  className,
  errorText = '',
  id,
  label = 'Text-area',
  maxLength,
  ...rest
}: Props) => {
  const classNames = clsx(s.textarea, errorText && s.error, className)
  const generatedId = useId()
  const customId = id || generatedId
  const [currentLength, setCurrentLength] = useState(0)
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentLength(event.target.value.length)
  }

  return (
    <div className={s.container}>
      {!!label && (
        <Label.Root className={s.label} htmlFor={customId}>
          {label}
        </Label.Root>
      )}
      <textarea
        aria-label={label}
        className={classNames}
        id={customId}
        maxLength={maxLength}
        onChange={handleChange}
        {...rest}
      />
      {maxLength && <p className={s.maxLength}>{`${currentLength}/${maxLength}`}</p>}
      {!!errorText && <p className={s.errorText}>{errorText}</p>}
    </div>
  )
}
