import { Meta, StoryObj } from '@storybook/react'

import { SelectBox, SelectContent, SelectItem, SelectTrigger, SelectValue } from './SelectBox'

const meta = {
  component: SelectBox,
  title: 'Components/SelectBox',
} satisfies Meta<typeof SelectBox>

export default meta

type Story = StoryObj<typeof meta>

export const SelectBoxDefault: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className={'w-[180px]'}>
          <SelectValue placeholder={'Theme'} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={'light'}>Light</SelectItem>
          <SelectItem value={'dark'}>Dark</SelectItem>
          <SelectItem value={'system'}>System</SelectItem>
        </SelectContent>
      </>
    ),
  },
}
