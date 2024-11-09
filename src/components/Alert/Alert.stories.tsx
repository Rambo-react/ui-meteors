import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from './Alert'

const meta = {
  component: Alert,
  title: 'Components/Alert',
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const AcceptedAlert: Story = {
  args: {
    delay: 20000,
    message: 'Your settings are saved',
    variant: 'accepted',
  },
}

export const ErrorAlert: Story = {
  args: {
    delay: 20000,
    message: 'Error! Server is not available',
    variant: 'error',
  },
}
