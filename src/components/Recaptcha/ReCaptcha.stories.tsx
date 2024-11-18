import { useState } from 'react'

import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { Recaptcha, RecaptchaProps } from './ReCaptcha'

type FakeRecaptchaProps = {
  onClick?: () => void
  variant: RecaptchaProps['variant']
}

const FakeRecaptcha = (props: FakeRecaptchaProps) => {
  const { onClick, variant } = props

  const [recaptchaVariant, setRecaptchaVariant] = useState(variant)

  const handleOnClick = () => {
    setRecaptchaVariant('loading')
    setTimeout(() => {
      setRecaptchaVariant('checked')
    }, 1500)
  }

  return <Recaptcha onClick={onClick ?? handleOnClick} variant={recaptchaVariant} />
}

const meta = {
  component: FakeRecaptcha,
  title: 'Components/Recaptcha',
} satisfies Meta<typeof FakeRecaptcha>

export default meta

type Story = StoryObj<typeof meta>

export const Initial: Story = {
  args: { onClick: action('Button clicked'), variant: 'initial' },
}

export const Checked: Story = {
  args: { onClick: action('Button clicked'), variant: 'checked' },
}

export const Loading: Story = {
  args: { onClick: action('Button clicked'), variant: 'loading' },
}

export const Expired: Story = {
  args: { onClick: action('Button clicked'), variant: 'expired' },
}

export const WithError: Story = {
  args: { onClick: action('Button clicked'), variant: 'withError' },
}

export const SuccessfulFlow: Story = {
  args: {
    variant: 'initial',
  },
}
