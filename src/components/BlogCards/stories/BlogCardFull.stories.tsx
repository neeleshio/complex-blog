import type { Meta, StoryObj } from '@storybook/react';
import BlogCardFull from '../BlogCardFull';
import react3d from '@/public/react-3d.png';

const meta = {
    title: 'Components/BlogCard/BlogCardFull',
    component: BlogCardFull,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
} satisfies Meta<typeof BlogCardFull>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        title: 'Card Title',
        topic: 'Topic',
        link: '',
        date: '25 April 2024',
        img: react3d
    }
};
