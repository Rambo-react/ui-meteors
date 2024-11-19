import { ComponentPropsWithoutRef, useId } from 'react'

import * as Label from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './TextArea.module.scss'

type Props = {
  disabled?: boolean
  errorText?: string
  label?: string
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = ({
  className,
  disabled = false,
  errorText = '',
  label = 'Text-area',
  ...rest
}: Props) => {
  const classNames = clsx(s.textarea, errorText && s.error, className)
  const labelClassNames = clsx(s.label, disabled && s.disabled)
  const id = useId()

  return (
    <div className={s.container}>
      {!!label && (
        <Label.Root className={labelClassNames} htmlFor={id}>
          {label}
        </Label.Root>
      )}
      <textarea aria-label={label} className={classNames} id={id} {...rest} disabled={disabled} />
      {!!errorText && <p className={s.errorText}>{errorText}</p>}
    </div>
  )
}
