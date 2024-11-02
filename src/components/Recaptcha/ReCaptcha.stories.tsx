import { Meta, StoryFn } from '@storybook/react';
import ReCaptcha, { ReCaptchaProps } from './ReCaptcha';

export default {
  title: 'Components/ReCaptcha',
  component: ReCaptcha,
} as Meta;

const Template: StoryFn<ReCaptchaProps> = (args) => <ReCaptcha {...args} />;

export const Default = Template.bind({});
Default.args = {
  siteKey: '6LehviATAAAAACZ5hcTODQmVldaS5fVHAOKbw3MP', // Заменит на ваш реальный siteKey
  onChange: (value) => {
    console.log('Captcha value:', value);
  },
};
