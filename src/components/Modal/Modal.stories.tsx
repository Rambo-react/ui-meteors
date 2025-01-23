import { Meta, StoryObj } from '@storybook/react'

import s from '../Card/Card.module.scss'

import { Button, SelectBox } from '..'
import { ImageIconOutline } from '../Icons'
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
    customHeader: {
      defaultValue: undefined,
      description: 'Here you can use custom header',
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
    onCloseOut: {
      description:
        'This handler is responsible for binding an event to a click outside the modal window.',
    },
    title: {
      description: 'Set title for modal',
    },
    withoutHeader: {
      description: 'Modal without header',
    },
  },
  args: {
    children: <div>Children</div>,
    customHeader: undefined,
    isOpen: false,
    title: 'Title',
    withoutHeader: false,
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '20px' }}>
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
          <ImageIconOutline height={40} viewBox={'0 0 30 30'} width={40} />
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
export const WithCustomHeaderStory: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '20px' }}>
        <p>Modal content</p>
      </div>
    ),
    customHeader: (
      <div>
        <p>Custom header</p>
      </div>
    ),
  },
}
export const WithoutHeaderStory: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '20px' }}>
        <p>Modal content</p>
      </div>
    ),
    isOpen: true,
    withoutHeader: true,
  },
}
