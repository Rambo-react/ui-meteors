import { Meta, StoryObj } from '@storybook/react'
import s from '../Card/Card.module.scss'

import { Modal } from './Modal'
import { Icon, Input, Select, SelectItem } from '..'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
  argTypes: {
    children: {
      control: 'select',
      options: {
        text: 'We have sent a link to confirm your email to epam@epam.com',
        withInput: (
          <div>
            <p>Some words:</p>
            <Input />
          </div>
        ),
        withCard: (
          <div
            className={s.card}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon id="image-outline" width={40} height={40} viewBox="0 0 30 30" />
          </div>
        ),
      },
      description: 'Accepts whole components, which is very convenient in terms of scalability',
    },
    buttons: {
      control: 'select',
      options: [['Button'], ['Button1', 'Button2'], ['Select from Computer', 'Open Draft']],
      description: `Accepts values in an array
['btn1','btn2',.....]`,
    },
    firstBtnHandler: {
      description: 'Handler for actions on first button',
    },
    secondBtnHandler: {
      description: 'Handler for actions on another button',
    },
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const SentToEmail: Story = {
  args: {
    title: 'Email sent',
    children: <p>We have sent a link to confirm your email to epam@epam.com</p>,
    buttons: ['OK'],
  },
}

export const WithSelector: Story = {
  args: {
    title: 'Ban user',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Select placeholder="Reason for ban">
          <SelectItem value={'Bad behavior'}>Bad behavior</SelectItem>
          <SelectItem value={'Advertising placement'}>Advertising placement</SelectItem>
          <SelectItem value={'Another reason'}>Another reason</SelectItem>
        </Select>
      </div>
    ),
    buttons: ['No', 'Yes'],
  },
}

export const WithCard: Story = {
  args: {
    title: 'Ban user',
    children: (
      <div
        className={s.card}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Icon id="image-outline" width={40} height={40} viewBox="0 0 30 30" />
      </div>
    ),
    buttons: ['Select from Computer', 'Open Draft'],
  },
}
