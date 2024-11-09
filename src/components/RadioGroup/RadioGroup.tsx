import { useState } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import styles from './RadioGroup.module.scss'

type RadioGroupProps = {
  disabled?: boolean
  disabledOption?: string
  labels?: RadioLabels
  onChange?: (value: string) => void
}
export type RadioLabels = {
  option1: string
  option2: string
  option3: string
}
export const RadioGroupExample = ({
  disabled = false,
  disabledOption,
  labels = { option1: 'RadioGroup1', option2: 'RadioGroup2', option3: 'RadioGroup3' },
  onChange,
}: RadioGroupProps) => {
  const [selected, setSelected] = useState<string>('RadioGroup1')
  const handleChange = (value: string) => {
    setSelected(value)
    if (onChange) {
      onChange(value)
    }
  }

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
          <div className={styles.radioGroupLayoutItem}>
            <RadioGroup.Item
              className={styles.radioGroupItem}
              disabled={disabled || disabledOption === 'RadioGroup1'}
              id={'RadioGroup1'}
              value={'RadioGroup1'}
            >
              <RadioGroup.Indicator className={styles.radioGroupIndicator} />
            </RadioGroup.Item>
            <label className={styles.label} htmlFor={'RadioGroup1'}>
              {labels.option1}
            </label>
          </div>
          <div className={styles.radioGroupLayoutItem}>
            <RadioGroup.Item
              className={styles.radioGroupItem}
              disabled={disabled || disabledOption === 'RadioGroup2'}
              id={'RadioGroup2'}
              value={'RadioGroup2'}
            >
              <RadioGroup.Indicator className={styles.radioGroupIndicator} />
            </RadioGroup.Item>
            <label className={styles.label} htmlFor={'RadioGroup2'}>
              {labels.option2}
            </label>
          </div>
          <div className={styles.radioGroupLayoutItem}>
            <RadioGroup.Item
              className={styles.radioGroupItem}
              disabled={disabled || disabledOption === 'RadioGroup3'}
              id={'RadioGroup3'}
              value={'RadioGroup3'}
            >
              <RadioGroup.Indicator className={styles.radioGroupIndicator} />
            </RadioGroup.Item>
            <label className={styles.label} htmlFor={'RadioGroup3'}>
              {labels.option3}
            </label>
          </div>
        </RadioGroup.Root>
      </div>
    </form>
  )
}
