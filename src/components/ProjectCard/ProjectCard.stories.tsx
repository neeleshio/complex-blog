import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from '.';
import ReactIcon from '@/assets/images/svg/icons/ReactIcon';
import OpenaiIcon from '@/assets/images/svg/OpenaiIocon';
import ReduxIcon from '@/assets/images/svg/icons/ReduxIcon';
import StyledCompIcon from '@/assets/images/svg/icons/StyledCompIcon';
import { fn } from '@storybook/test';
import Facebook from '@/assets/images/svg/Facebook';

const meta = {
    title: 'Components/ProjectCard',
    component: ProjectCard,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        name: 'Facebook Clone',
        image: Facebook,
        description: 'Facebook webapp clone',
        latest: true,
        link: 'https://www.facebook.com/',
        navigate: fn(),
        stack: [ReactIcon, OpenaiIcon, ReduxIcon, StyledCompIcon]
    }
};
