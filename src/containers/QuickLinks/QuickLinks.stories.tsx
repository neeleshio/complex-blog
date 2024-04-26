import type { Meta, StoryObj } from '@storybook/react';
import StorybookIcon from '@/assets/images/svg/blogIcons/StorybookIcon';
import { fn } from '@storybook/test';
import QuickLinks from '.';

const meta: Meta<typeof QuickLinks> = {
    title: 'Components/QuickLinks',
    component: QuickLinks,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
