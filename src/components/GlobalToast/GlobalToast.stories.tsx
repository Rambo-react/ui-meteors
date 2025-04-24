import type { Meta, StoryObj } from '@storybook/react'

import { GlobalToast } from './GlobalToast'

const meta = {
  component: GlobalToast,
  title: 'Components/GlobalToast',
} satisfies Meta<typeof GlobalToast>

export default meta
type Story = StoryObj<typeof meta>

export const AcceptedAlert: Story = {
  args: {
    delay: 1000,
    duration: 3000,
    messages: [
      { id: '1', message: 'Your settings are saved', type: 'accepted' },
      { id: '2', message: 'Your settings are saved!!', type: 'accepted' },
      { id: '3', message: 'Your settings are saved!!!!', type: 'accepted' },
    ],
  },
}

export const ErrorAlert: Story = {
  args: {
    delay: 1000,
    duration: 3000,
    messages: [
      { id: '1', message: 'Error! Server is not available', type: 'error' },
      { id: '2', message: 'Error! Server is not available%%', type: 'error' },
      { id: '3', message: 'Error! Server is not available&&', type: 'error' },
    ],
  },
}
