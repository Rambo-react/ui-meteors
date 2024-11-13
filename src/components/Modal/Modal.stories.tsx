import { Meta, StoryObj } from '@storybook/react'

import s from '../Card/Card.module.scss'

import { Button, Icon, SelectBox } from '..'
import { Modal } from './Modal'
import { StoryTemplate } from './StoryTemplate'

const meta = {
  argTypes: {
    children: {
      description: 'Here you can use all components',
      options: {
        none: '*',
      },
    },
    isOpen: {
      control: 'select',
      description: 'Event for opening and closing a modal window (true / false)',
      options: {
        closed: false,
        open: true,
      },
    },
    onClose: {
      description: 'This handler is responsible for binding the event to the window close button ',
    },
    title: {
      description: 'Set title for modal',
    },
  },
  args: {
    children: <div>Children</div>,
    isOpen: false,
    title: 'Title',
  },
  component: Modal,
  render: args => <StoryTemplate {...args} />,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ExampleStory: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <p>Children example</p>
        <Button style={{ alignSelf: 'flex-end', fontWeight: '600' }}>EXAMPLE</Button>
      </div>
    ),
    isOpen: true,
    title: 'Title Example',
  },
}

export const WithSelectorStory: Story = {
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

export const WithCardStory: Story = {
  args: {
    children: (
      <div>
        <div
          className={s.card}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: '222px',
          }}
        >
          <Icon height={40} id={'image-outline'} viewBox={'0 0 30 30'} width={40} />
        </div>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'space-around',
            marginTop: '20px',
          }}
        >
          <Button style={{ width: '219px' }} variant={'primary'}>
            Select from Computer
          </Button>
          <Button style={{ width: '219px' }} variant={'outline'}>
            Open Draft
          </Button>
        </div>
      </div>
    ),
    title: 'Add Photo',
  },
}
