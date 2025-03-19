import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useState } from 'react'

import { Tabs } from './'

const tabs = [
  {
    onTabClick: () => {},
    value: 'General information',
  },
  {
    onTabClick: () => {},
    value: 'Devices',
  },
  {
    onTabClick: () => {},
    value: 'Account Management',
  },
  {
    onTabClick: () => {},
    value: 'My payments',
  },
]

const meta = {
  argTypes: {
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

    const tabsWithHandlers = args.tabs.map(tab => ({
      ...tab,
      onTabClick: () => setSelectedTab(tab.value),
    }))

    return <Tabs {...args} selected={selectedTab} tabs={tabsWithHandlers} />
  },
}

export const WithEachDisabledTab: Story = {
  render(args) {
    const tabsWithDisabled = args.tabs.map(tab => ({
      ...tab,
      disabled: true,
    }))

    return <Tabs {...args} tabs={tabsWithDisabled} />
  },
}
