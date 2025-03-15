import { ComponentPropsWithoutRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './Tabs.module.scss'

export type Tab = Omit<
  ComponentPropsWithoutRef<typeof RadixTabs.Trigger>,
  'children' | 'className' | 'key' | 'onClick'
> & {
  path: string
  value: string
}

type Props = {
  getTabNameOnClick: (tabName: string) => void
  selected?: string
  tabs: Tab[]
}

export const Tabs = ({ getTabNameOnClick, selected, tabs }: Props) => {
  const mappedData = tabs.map(({ path, value, ...rest }) => (
    <RadixTabs.Trigger
      className={clsx(s.tab, {
        [s.selected]: path === selected,
      })}
      key={path}
      onClick={() => getTabNameOnClick(path)}
      value={path}
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
