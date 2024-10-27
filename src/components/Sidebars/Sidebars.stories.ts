import type { Meta, StoryObj } from '@storybook/react';
import {Sidebars} from "./Sidebars";


const meta = {
  title: 'Components/Sidebars',
  component: Sidebars,
  tags: ['autodocs'],

} satisfies Meta<typeof Sidebars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
