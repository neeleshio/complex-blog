import type { Meta, StoryObj } from '@storybook/react';
import campk12 from '@/assets/images/png/campk12.png';
import PreviousWork from '../PreviousWork';
import { fn } from '@storybook/test';

const meta = {
    title: 'Components/WorkCard/PreviousWork',
    component: PreviousWork,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof PreviousWork>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        company: 'Previous Company',
        designation: 'Software Engineer',
        timeline: 'Jan 2022 - Jan 2023',
        Img: campk12,
        navigate: fn(),
        link: 'https://www.tcs.com/careers'
    }
};
