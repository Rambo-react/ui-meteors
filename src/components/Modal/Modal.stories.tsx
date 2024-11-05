import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta = {
  component: Modal,
  title: 'Components/Modal',
  argTypes: {
    children: {
      control: 'select',
      options: [
        'Are you sure you want to delete this post?',
        'We have sent a link to confirm your email to epam@epam.com',
      ],
      description: 'Accepts whole components, which is very convenient in terms of scalability',
    },
    buttons: {
      control: 'select',
      options: [['OK'], ['Yes', 'No']],
      description: `Accepts values in an array
['btn1','btn2',.....]`,
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    title: 'Title here',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Hi</p>
        <input type="text" name="" id="" />
        <p>Hi</p>
        <input type="text" name="" id="" />
        <p>Hi</p>
        <input type="text" name="" id="" />
      </div>
    ),
    buttons: ['Handler', 'New'],
  },
}
