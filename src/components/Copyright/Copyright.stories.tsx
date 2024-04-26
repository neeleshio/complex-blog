import type { Meta, StoryObj } from '@storybook/react';
import Copyright from '.';

const meta: Meta<typeof Copyright> = {
    title: 'Components/Copyright',
    component: Copyright,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {}
};
