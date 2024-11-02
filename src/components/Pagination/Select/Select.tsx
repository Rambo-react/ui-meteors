import * as SelectRadix from '@radix-ui/react-select'

import s from './Select.module.scss'

import { Icon } from '../../Icon'

type Props = {
  onValueChange: (value: string) => void
  options: string[]
}

export const Select = ({ onValueChange, options }: Props) => {
  const mappedOptions = options.map(v => (
    <SelectRadix.Item className={s.item} key={v} value={v}>
      <SelectRadix.ItemText>{v}</SelectRadix.ItemText>
    </SelectRadix.Item>
  ))

  return (
    <SelectRadix.Root onValueChange={onValueChange}>
      <SelectRadix.Trigger aria-label={'Items per page'} className={s.trigger}>
        <SelectRadix.Value placeholder={'100'} />
        <SelectRadix.Icon>
          <Icon
            fill={'var(--color-light-100)'}
            hanging={16}
            id={'arrow-ios-forward'}
            viewBox={'0 0 24 24'}
            width={16}
          />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>

      <SelectRadix.Portal>
        <SelectRadix.Content className={s.content} position={'popper'}>
          <SelectRadix.Viewport>
            <SelectRadix.Group>{mappedOptions}</SelectRadix.Group>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
