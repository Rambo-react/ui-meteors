import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import styles from './RadioGroup.module.scss'

type RadioGroupProps = {
  currentValue: string
  disabled: boolean
  disabledOptions?: string[]
  onChange: (value: string) => void
  options: string[]
}

export const RadioGroup = ({
  currentValue,
  disabled = false,
  disabledOptions,
  onChange,
  options,
}: RadioGroupProps) => {
  const mappedRadioGroupItems = options.map(option => (
    <div className={styles.radioGroupLayoutItem} key={option}>
      <RadioGroupRadix.Item
        className={styles.radioGroupItem}
        disabled={disabledOptions?.includes(option)}
        id={option}
        value={option}
      >
        <RadioGroupRadix.Indicator className={styles.radioGroupIndicator} />
      </RadioGroupRadix.Item>
      <label className={styles.option} htmlFor={option}>
        {option}
      </label>
    </div>
  ))

  const onValueChangeHandler = (value: string) => {
    onChange(value)
  }

  return (
    <form>
      <div className={styles.radioGroupLayout}>
        <RadioGroupRadix.Root
          aria-disabled={disabled}
          className={styles.radioGroupRoot}
          disabled={disabled}
          onValueChange={onValueChangeHandler}
          value={currentValue}
        >
          {mappedRadioGroupItems}
        </RadioGroupRadix.Root>
      </div>
    </form>
  )
}
