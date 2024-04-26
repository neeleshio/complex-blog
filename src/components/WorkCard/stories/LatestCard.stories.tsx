import type { Meta, StoryObj } from '@storybook/react';
import flipkart from '@/assets/images/png/flipkart.png';
import LatestWork from '../LatestWork';
import { fn } from '@storybook/test';

const meta = {
    title: 'Components/WorkCard/LatestWork',
    component: LatestWork,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof LatestWork>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        company: 'Present Company',
        designation: 'Software Engineer',
        timeline: 'Jan 2023 - Present',
        Img: flipkart,
        navigate: fn(),
        link: 'https://www.flipkartcareers.com/#!/lifeatflipkart'
    }
};
