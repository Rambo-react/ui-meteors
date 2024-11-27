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
    message: 'Your settings are saved',
    styles: {
      left: '20px',
      top: '20px',
    },
    variant: 'accepted',
  },
}

export const ErrorAlert: Story = {
  args: {
    message: 'Error! Server is not available',
    styles: {
      left: '20px',
      top: '20px',
    },
    variant: 'error',
  },
}
