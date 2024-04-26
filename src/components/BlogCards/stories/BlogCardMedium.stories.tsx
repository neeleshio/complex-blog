import type { Meta, StoryObj } from '@storybook/react';
import BlogCardMedium from '../BlogCardMedium';
import virtualDomImg from '@/public/react-vdom.png';

const meta = {
    title: 'Components/BlogCard/BlogCardMedium',
    component: BlogCardMedium,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
} satisfies Meta<typeof BlogCardMedium>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        title: 'Card Title',
        topic: 'Topic',
        link: '',
        date: '25 April 2024',
        img: virtualDomImg
    }
};
