import { Meta, StoryObj } from '@storybook/react'

import s from '../Card/Card.module.scss'

import { Button, Icon, Input, SelectBox } from '..'
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
        <SelectBox
          onValueChange={() => {}}
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
        />
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
