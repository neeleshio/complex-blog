import type { Meta, StoryObj } from '@storybook/react';
import arrowFunImg from '@/public/arrow-functions.png';
import BlogCardLarge from '../BlogCardLarge';

const meta = {
    title: 'Components/BlogCard/BlogCardLarge',
    component: BlogCardLarge,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
} satisfies Meta<typeof BlogCardLarge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        title: 'Card Title',
        topic: 'Topic',
        link: '',
        date: '25 April 2024',
        img: arrowFunImg
    }
};
