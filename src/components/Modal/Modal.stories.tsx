import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import s from '../Card/Card.module.scss'

import { Button, Header, Icon, Input, SelectBox } from '..'
import { Modal } from './Modal'

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
    onCloseBtn: {
      description: 'This handler is responsible for binding the event to the window close button ',
    },
    title: {
      description: 'Set title for modal',
    },
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const Example = () => {
  const [open, setOpen] = useState(true)

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <Modal isOpen={open} onCloseBtn={clickHandler} title={'Title Example'}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <p>Children example</p>
        <Button style={{ alignSelf: 'flex-end', fontWeight: '600' }}>EXAMPLE</Button>
      </div>
    </Modal>
  )
}

const WithSelector = () => {
  const [open, setOpen] = useState(true)

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <Modal isOpen={open} onCloseBtn={clickHandler} title={'Ban user'}>
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
    </Modal>
  )
}

const WithCard = () => {
  const [open, setOpen] = useState(true)

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <Modal isOpen={open} onCloseBtn={clickHandler} title={'Add Photo'}>
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
    </Modal>
  )
}

export const ExampleStory: Story = {
  render: Example,
}

export const WithSelectorStory: Story = {
  render: WithSelector,
}

export const WithCardStory: Story = {
  render: WithCard,
}

const CombinedComponents = () => {
  const [open, setOpen] = useState(false)

  const clickHandler = () => {
    console.log(open)
    setOpen(!open)
  }

  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: '#4e4e4eaa',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        padding: '0',
        width: '100vw',
      }}
    >
      <Button onClick={clickHandler}>Click me</Button>
      <Modal isOpen={open} onCloseBtn={clickHandler} title={'Im modal'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p>Bla-bla-bla</p>
          <Button style={{ alignSelf: 'flex-end', width: '150px' }}>Hit me if you can</Button>
        </div>
      </Modal>
    </div>
  )
}

export const OverlayExample = () => <CombinedComponents />
