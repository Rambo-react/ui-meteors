import { Meta, StoryObj } from '@storybook/react'

import s from '../Card/Card.module.scss'

import { Icon, Input, Select, SelectItem } from '..'
import { Modal } from './Modal'

const meta = {
  argTypes: {
    children: {
      control: 'select',
      description: 'Accepts whole components, which is very convenient in terms of scalability',
      options: {
        text: 'We have sent a link to confirm your email to epam@epam.com',
        withCard: (
          <div
            className={s.card}
            style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
          >
            <Icon height={40} id={'image-outline'} viewBox={'0 0 30 30'} width={40} />
          </div>
        ),
        withInput: (
          <div>
            <p>Some words:</p>
            <Input />
          </div>
        ),
      },
    },
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const SentToEmail: Story = {
  args: {
    children: <p>We have sent a link to confirm your email to epam@epam.com</p>,
    title: 'Email sent',
  },
}

export const WithSelector: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Select placeholder={'Reason for ban'}>
          <SelectItem value={'Bad behavior'}>Bad behavior</SelectItem>
          <SelectItem value={'Advertising placement'}>Advertising placement</SelectItem>
          <SelectItem value={'Another reason'}>Another reason</SelectItem>
        </Select>
      </div>
    ),
    title: 'Ban user',
  },
}

export const WithCard: Story = {
  args: {
    children: (
      <div
        className={s.card}
        style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
      >
        <Icon height={40} id={'image-outline'} viewBox={'0 0 30 30'} width={40} />
      </div>
    ),
    title: 'Ban user',
  },
}
