import { Meta, StoryObj } from '@storybook/react'

import s from '../Card/Card.module.scss'

import { Button, Icon, Input, Select, SelectItem } from '..'
import { Modal } from './Modal'

const meta = {
  argTypes: {
    children: {
      control: 'select',
      description: 'Accepts whole components, which is very convenient in terms of scalability',
      options: {
        text: <p>We have sent a link to confirm your email to epam@epam.com</p>,
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
    onCloseBtn: {
      description: 'Use for Handling listeners on Button ',
    },
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    children: <p>Children Example</p>,
    title: 'Title Example',
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
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <Button variant={'primary'}>No</Button>
          <Button variant={'outline'}>Yes</Button>
        </div>
      </div>
    ),
    title: 'Ban user',
  },
}

export const WithCard: Story = {
  args: {
    children: (
      <div>
        <div
          className={s.card}
          style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
        >
          <Icon height={40} id={'image-outline'} viewBox={'0 0 30 30'} width={40} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'space-around',
            marginTop: '20px',
          }}
        >
          <Button variant={'primary'}>Select from Computer</Button>
          <Button variant={'outline'}>Open Draft</Button>
        </div>
      </div>
    ),
    title: 'Add Photo',
  },
}
