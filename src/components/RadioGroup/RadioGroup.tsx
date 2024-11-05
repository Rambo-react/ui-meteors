import { useState } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import styles from './RadioGroup.module.scss'

type RadioGroupProps = {
  defaultValue?: string
  disabled: boolean
  disabledOption?: string[]
  labels: string[]
  onChange?: (value: string) => void
}

export const RadioGroupExample = ({
  defaultValue = '',
  disabled = false,
  disabledOption,
  labels,
  onChange,
}: RadioGroupProps) => {
  const [selected, setSelected] = useState<string>(defaultValue)
  const handleChange = (value: string) => {
    setSelected(value)
    if (onChange) {
      onChange(value)
    }
  }
  const mappedRadioGroupItems = labels.map(label => (
    <div className={styles.radioGroupLayoutItem} key={label}>
      <RadioGroup.Item
        className={styles.radioGroupItem}
        disabled={disabled || disabledOption?.includes(label)}
        id={label}
        value={label}
      >
        <RadioGroup.Indicator className={styles.radioGroupIndicator} />
      </RadioGroup.Item>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
    </div>
  ))

  return (
    <form>
      <div className={styles.radioGroupLayout}>
        <RadioGroup.Root
          aria-disabled={disabled}
          className={styles.radioGroupRoot}
          disabled={disabled}
          onValueChange={handleChange}
          value={selected}
        >
          {mappedRadioGroupItems}
        </RadioGroup.Root>
      </div>
    </form>
  )
}
