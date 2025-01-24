import React, { ComponentPropsWithoutRef, useId, useState } from 'react'

import * as Label from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './TextArea.module.scss'

type Props = {
  errorText?: string
  label?: string
  maxLengthVisible?: boolean
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange'>

export const TextArea = ({
  className,
  errorText = '',
  id,
  label = 'Text-area',
  maxLengthVisible = false,
  onChange = () => {},
  ...rest
}: Props) => {
  const showMaxLength = !errorText && maxLengthVisible
  const classNames = clsx(s.textarea, errorText && s.error, className)
  const generatedId = useId()
  const customId = id || generatedId
  const [currentLength, setCurrentLength] = useState(0)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentLength(event.target.value.length)

    if (onChange) {
      onChange(event)
    }
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
        onChange={handleChange}
        {...rest}
      />
      {!!errorText && <p className={s.errorText}>{errorText}</p>}

      {showMaxLength && <p className={s.maxLength}>{`${currentLength}/${rest.maxLength}`}</p>}
    </div>
  )
}
