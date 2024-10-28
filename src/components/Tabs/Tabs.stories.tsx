import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useState } from 'react'

import { Tabs } from './'

const tabs = [
  { value: 'General information' },
  { value: 'Devices' },
  { value: 'Account Management' },
  { value: 'My payments' },
]

const meta = {
  argTypes: {
    getTabNameOnClick: {
      defaultValue: () => {},
      description: 'Allows you to get the tab name when you click on a tab',
    },
    selected: {
      control: { type: 'radio' },
      defaultValue: 'Devices',
      description: 'Current selected tab (optional)',
      options: ['General information', 'Devices', 'Account Management', 'My payments'],
    },
    tabs: {
      defaultValue: tabs,
      description: 'Tabs to display',
    },
  },
  args: {
    selected: 'Devices',
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
