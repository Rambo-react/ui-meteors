import { ReactNode, useState } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

import s from './SelectBox.module.scss'

import { ArrowIosDownOutline } from '../Icons'

type Option = {
  icon?: ReactNode
  label: string
  value: string
}

type Props = {
  defaultValue?: string
  disabled?: boolean
  label?: string
  onValueChange: (value: string) => void
  options: Option[]
  placeholder?: string
}

export const SelectBox = ({
  defaultValue,
  disabled,
  label,
  onValueChange,
  options,
  placeholder,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<null | string>(defaultValue || null)

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
    onValueChange(value)
  }

  const selectedOption = options.find(option => option.value === selectedValue)

  return (
    <SelectRadix.Root onValueChange={handleValueChange}>
      {label && <label className={s.label}>{label}</label>}
      {selectedOption ? (
        <SelectRadix.Trigger className={s.trigger} data-disabled={disabled}>
          <div className={s.optionContent}>
            <div className={s.icon}>{selectedOption.icon}</div>
            <div>{selectedOption.label}</div>
          </div>
          <SelectRadix.Icon>
            <ArrowIosDownOutline
              className={s.triggerChevron}
              fill={'currentColor'}
              height={24}
              width={24}
            />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
      ) : (
        <SelectRadix.Trigger className={s.trigger} data-disabled={disabled}>
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon>
            <ArrowIosDownOutline
              className={s.triggerChevron}
              fill={'currentColor'}
              height={24}
              width={24}
            />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
      )}

      <SelectRadix.Portal>
        <SelectRadix.Content className={s.content} position={'popper'}>
          <SelectRadix.Viewport className={s.viewport}>
            <SelectRadix.Group>
              {options.map(({ icon, label, value }) => (
                <SelectRadix.Item className={s.item} key={value} value={value}>
                  <div className={s.optionContent}>
                    {icon && <div className={s.icon}>{icon}</div>}
                    <SelectRadix.ItemText>{label}</SelectRadix.ItemText>
                  </div>
                </SelectRadix.Item>
              ))}
            </SelectRadix.Group>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
