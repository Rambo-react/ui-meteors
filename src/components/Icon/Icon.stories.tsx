import type { Meta, StoryObj } from '@storybook/react'

import s from './Icon.module.scss'

import { Icon } from '.'

const arrayOfOptions = [
  'arrow-back-outline',
  'arrow-forward-outline',
  'arrow-ios-back-outline',
  'arrow-ios-back',
  'arrow-ios-down-outline',
  'arrow-ios-forward-outline',
  'arrow-ios-forward',
  'arrow-ios-up',
  'bell-fill',
  'bell-outline',
  'block',
  'bookmark-outline',
  'bookmark',
  'calendar-outline',
  'calendar',
  'checkmark-outline',
  'close-outline',
  'close',
  'color-palette-outline',
  'copy-outline',
  'copy',
  'credit-card-outline',
  'credit-card',
  'done-all-outline',
  'edit-outline',
  'edit',
  'email-outline',
  'email',
  'expand-outline',
  'expand',
  'eye-off-outline',
  'eye-off',
  'eye-outline',
  'eye',
  'facebook',
  'flag-russia',
  'flag-uk',
  'github',
  'google',
  'heart-outline',
  'heart',
  'home-outline',
  'home',
  'image-outline',
  'image',
  'layers-outline',
  'layers',
  'log-out-outline',
  'log-out',
  'maximize-outline',
  'maximize',
  'menu-outline',
  'message-circle-outline',
  'message-circle',
  'mic-outline',
  'mic',
  'more-horizontal-outline',
  'more-horizontal',
  'paid',
  'paper-plane-outline',
  'paper-plane',
  'pause-circle-outline',
  'pause-circle',
  'paypal',
  'person-add-outline',
  'person-add',
  'person-outline',
  'person-remove-outline',
  'person-remove',
  'person',
  'pin-outline',
  'pin',
  'play-circle-outline',
  'play-circle',
  'plus-circle-outline',
  'plus-circle',
  'plus-square-outline',
  'plus-square',
  'radio-button-checked',
  'radio-button-unchecked',
  'recaptcha-logo',
  'search-outline',
  'search',
  'settings-outline',
  'settings',
  'stripe',
  'trash-outline',
  'trash',
  'trending-up-outline',
  'trending-up',
  'brave',
  'explorer',
  'firefox',
  'microsoft-edge',
  'opera',
  'safari',
  'uc-browser',
  'yandex',
  'flag-russia',
  'flag-uk',
]

const meta = {
  argTypes: {
    id: {
      control: { type: 'select' },
      options: arrayOfOptions,
    },
    stroke: {
      control: { type: 'color' },
    },
  },
  args: {
    height: 24,
    id: 'github',
    width: 24,
  },
  component: Icon,
  tags: ['autodocs'],
  title: 'Components/Icon',
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {},
}

export const Gallery = () => (
  <div className={s.wrapper}>
    {arrayOfOptions.map(iconName => (
      <div className={s.container} key={iconName}>
        <div className={s.iconContainer}>
          <Icon height={24} id={iconName} width={24} />
        </div>
        <p>{iconName}</p>
      </div>
    ))}
  </div>
)
