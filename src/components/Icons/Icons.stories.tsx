import { Meta, StoryObj } from '@storybook/react'

import s from './Icon.module.scss'

import * as icons from './index'

const meta = {
  argTypes: {
    fill: {
      control: { type: 'color' },
    },
    height: {
      control: {
        type: 'number',
      },
    },
    stroke: {
      control: { type: 'color' },
    },
    width: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    fill: 'black',
    height: 24,
    width: 24,
  },
  component: icons.CalendarIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof icons.CalendarIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Gallery: Story = {
  render(args) {
    return (
      <div className={s.wrapper}>
        {Object.entries(icons).map(([name, Icon]) => (
          <div className={s.container} key={name}>
            <div className={s.iconContainer}>
              <Icon fill={args.fill} height={args.height} stroke={args.stroke} width={args.width} />
            </div>
            <p>{name}</p>
          </div>
        ))}
      </div>
    )
  },
}
