import { ComponentPropsWithoutRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './Tabs.module.scss'

export type Tab = Omit<
  ComponentPropsWithoutRef<typeof RadixTabs.Trigger>,
  'children' | 'className' | 'key' | 'onClick'
> & {
  onTabClick: () => void
  value: string
}

type Props = {
  selected?: string
  tabs: Tab[]
}

export const Tabs = ({ selected, tabs }: Props) => {
  const mappedData = tabs.map(({ onTabClick, value, ...rest }) => (
    <RadixTabs.Trigger
      className={clsx(s.tab, {
        [s.selected]: value === selected,
      })}
      key={value}
      onClick={onTabClick}
      value={value}
      {...rest}
    >
      {value}
    </RadixTabs.Trigger>
  ))

  return (
    <RadixTabs.Root value={selected}>
      <RadixTabs.List className={s.list}>{mappedData}</RadixTabs.List>
    </RadixTabs.Root>
  )
}
