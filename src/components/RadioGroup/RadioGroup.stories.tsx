import type { Meta, StoryObj } from '@storybook/react';
import RadioGroupExample from "./RadioGroup";



const meta = {
    title: 'Components/RadioGroup',
    component: RadioGroupExample,
    tags: ['autodocs'],

} satisfies Meta<typeof RadioGroupExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
