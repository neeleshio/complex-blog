import type { Meta, StoryObj } from '@storybook/react';
import BlogCardMedium from '../BlogCardMedium';
import jsxImg from '@/public/jsx-transform.png';
import BlogCardSmall from '../BlogCardSmall';

const meta = {
    title: 'Components/BlogCard/BlogCardSmall',
    component: BlogCardSmall,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof BlogCardSmall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        title: 'Card Title',
        topic: 'Topic',
        link: '',
        date: '25 April 2024',
        img: jsxImg
    }
};
