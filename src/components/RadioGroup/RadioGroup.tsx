import * as RadioGroup from '@radix-ui/react-radio-group'

import styles from './RadioGroup.module.scss'

type RadioGroupProps = {
  currentValue: string
  disabled: boolean
  disabledOptions?: string[]
  onChange: (value: string) => void
  options: string[]
}

export const RadioGroupComponent = ({
  currentValue,
  disabled = false,
  disabledOptions,
  onChange,
  options,
}: RadioGroupProps) => {
  const mappedRadioGroupItems = options.map(option => (
    <div className={styles.radioGroupLayoutItem} key={option}>
      <RadioGroup.Item
        className={styles.radioGroupItem}
        disabled={disabledOptions?.includes(option)}
        id={option}
        value={option}
      >
        <RadioGroup.Indicator className={styles.radioGroupIndicator} />
      </RadioGroup.Item>
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
        <RadioGroup.Root
          aria-disabled={disabled}
          className={styles.radioGroupRoot}
          disabled={disabled}
          onValueChange={onValueChangeHandler}
          value={currentValue}
        >
          {mappedRadioGroupItems}
        </RadioGroup.Root>
      </div>
    </form>
  )
}
