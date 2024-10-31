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
const RadioGroupExample = ({
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
      <div className={styles.RadioGroupLayout}>
        <RadioGroup.Root
          aria-disabled={disabled}
          className={styles.RadioGroupRoot}
          disabled={disabled}
          onValueChange={handleChange}
          value={selected}
        >
          <div className={styles.RadioGroupLayoutItem}>
            <RadioGroup.Item
              className={styles.RadioGroupItem}
              disabled={disabled || disabledOption === 'RadioGroup1'}
              id={'RadioGroup1'}
              value={'RadioGroup1'}
            >
              <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
            </RadioGroup.Item>
            <label className={styles.Label} htmlFor={'RadioGroup1'}>
              {labels.option1}
            </label>
          </div>
          <div className={styles.RadioGroupLayoutItem}>
            <RadioGroup.Item
              className={styles.RadioGroupItem}
              disabled={disabled || disabledOption === 'RadioGroup2'}
              id={'RadioGroup2'}
              value={'RadioGroup2'}
            >
              <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
            </RadioGroup.Item>
            <label className={styles.Label} htmlFor={'RadioGroup2'}>
              {labels.option2}
            </label>
          </div>
          <div className={styles.RadioGroupLayoutItem}>
            <RadioGroup.Item
              className={styles.RadioGroupItem}
              disabled={disabled || disabledOption === 'RadioGroup3'}
              id={'RadioGroup3'}
              value={'RadioGroup3'}
            >
              <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
            </RadioGroup.Item>
            <label className={styles.Label} htmlFor={'RadioGroup3'}>
              {labels.option3}
            </label>
          </div>
        </RadioGroup.Root>
      </div>
    </form>
  )
}

export default RadioGroupExample
