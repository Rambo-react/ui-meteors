import type { Meta, StoryObj } from '@storybook/react'

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
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {arrayOfOptions.map(iconName => (
      <div
        key={iconName}
        style={{
          alignItems: 'center',
          display: 'inline-flex',
          flex: '0 1 calc(20% - 10px)',
          flexDirection: 'row',
          margin: '0px 10px 30px 0',
          minWidth: '200px',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#fff',
            border: '1px solid hsla(203, 50%, 30%, 0.15)',
            borderRadius: '4px',
            boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
            display: 'flex',
            height: '40px',
            justifyContent: 'center',
            minWidth: '40px',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          <Icon height={24} id={iconName} width={24} />
        </div>
        <div
          style={{
            color: '#fff',
            fontSize: '12px',
            lineHeight: 1.2,
            marginLeft: '10px',
          }}
        >
          {iconName}
        </div>
      </div>
    ))}
  </div>
)
