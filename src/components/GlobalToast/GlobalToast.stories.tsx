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
      { message: 'Your settings are saved', type: 'accepted' },
      { message: 'Your settings are saved!!', type: 'accepted' },
      { message: 'Your settings are saved!!!!', type: 'accepted' },
    ],
  },
}

export const ErrorAlert: Story = {
  args: {
    delay: 1000,
    duration: 3000,
    messages: [
      { message: 'Error! Server is not available', type: 'error' },
      { message: 'Error! Server is not available%%', type: 'error' },
      { message: 'Error! Server is not available&&', type: 'error' },
    ],
  },
}
