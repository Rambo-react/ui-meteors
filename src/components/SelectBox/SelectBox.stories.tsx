import { SelectSeparator } from '@radix-ui/react-select'
import { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../Icon'
import { Select, SelectGroup, SelectItem, SelectLabel } from './SelectBox'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    children: (
      <>
        <SelectItem value={'1'}>First</SelectItem>
        <SelectItem value={'2'}>Second</SelectItem>
        <SelectItem value={'3'}>Third</SelectItem>
      </>
    ),
    placeholder: 'Primary Select',
  },
}

export const Disabled: Story = {
  args: {
    children: (
      <>
        <SelectItem value={'1'}>First</SelectItem>
        <SelectItem value={'2'}>Second</SelectItem>
        <SelectItem value={'3'}>Third</SelectItem>
      </>
    ),
    disabled: true,
    placeholder: 'Disabled',
  },
}

export const WithGroups: Story = {
  args: {
    children: (
      <>
        <SelectGroup>
          <SelectLabel>Group 1</SelectLabel>
          <SelectItem value={'1'}>1</SelectItem>
          <SelectSeparator />
          <SelectItem value={'2'}>2</SelectItem>
          <SelectItem value={'3'}>3</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Group 2</SelectLabel>
          <SelectItem value={'4'}>4</SelectItem>
          <SelectItem value={'5'}>5</SelectItem>
          <SelectItem value={'6'}>6</SelectItem>
        </SelectGroup>
      </>
    ),
    placeholder: 'Select a theme',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <SelectItem value={'en'}>
          <div style={{ alignItems: 'center', display: 'flex', gap: 12 }}>
            <Icon height={24} id={'flag-uk'} width={24} />
            <span>English</span>
          </div>
        </SelectItem>
        <SelectItem value={'ru'}>
          <div style={{ alignItems: 'center', display: 'flex', gap: 12 }}>
            <Icon height={24} id={'flag-russia'} width={24} />
            <span>Russian</span>
          </div>
        </SelectItem>
      </>
    ),
    defaultValue: 'en',
    placeholder: 'WithIcon',
  },
}
