import { ComponentPropsWithoutRef, useId } from 'react'

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
  ...rest
}: Props) => {
  const classNames = clsx(s.textarea, errorText && s.error, className)
  const generatedId = useId()
  const customId = id || generatedId

  return (
    <div className={s.container}>
      {!!label && (
        <Label.Root className={s.label} htmlFor={customId}>
          {label}
        </Label.Root>
      )}
      <textarea aria-label={label} className={classNames} id={customId} {...rest} />
      {!!errorText && <p className={s.errorText}>{errorText}</p>}
    </div>
  )
}
