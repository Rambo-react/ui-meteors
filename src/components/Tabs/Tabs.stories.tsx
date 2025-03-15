import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useState } from 'react'

import { Tabs } from './'

const tabs = [
  { path: 'general-information', value: 'General Information' },
  { path: 'devices', value: 'Devices' },
  { path: 'account-management', value: 'Account Management' },
  { path: 'my-payments', value: 'My Payments' },
]

const meta = {
  argTypes: {
    getTabNameOnClick: {
      defaultValue: () => {},
      description: 'Allows you to get the tab name when you click on a tab',
    },
    selected: {
      control: { type: 'radio' },
      defaultValue: 'devices',
      description: 'Current selected tab (optional)',
      options: ['general-information', 'devices', 'account-management', 'my-payments'],
    },
    tabs: {
      defaultValue: tabs,
      description: 'Tabs to display',
    },
  },
  args: {
    selected: 'devices',
    tabs,
  },
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const BasicExample: Story = {
  render(args) {
    const [selectedTab, setSelectedTab] = useState(args.selected)

    useEffect(() => setSelectedTab(args.selected), [args.selected])

    const selectTabHandler = (tabName: string) => {
      setSelectedTab(tabName)
    }

    return <Tabs {...args} getTabNameOnClick={selectTabHandler} selected={selectedTab} />
  },
}

export const WithEachDisabledTab: Story = {
  render(args) {
    const tabsWithDisabled = args.tabs.map(tab => ({ ...tab, disabled: true }))

    return <Tabs {...args} tabs={tabsWithDisabled} />
  },
}
