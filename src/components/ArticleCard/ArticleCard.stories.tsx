import type { Meta, StoryObj } from '@storybook/react';
import ArticleCard from '.';
import StorybookIcon from '@/assets/images/svg/blogIcons/StorybookIcon';
import { fn } from '@storybook/test';

const meta: Meta<typeof ArticleCard> = {
    title: 'Components/ArticleCard',
    component: ArticleCard,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        title: (
            <>
                <span className="text-[#FE4685]">How & When to use </span> Storybook effectively.
            </>
        ),
        image: StorybookIcon,
        link: 'https://storybook.js.org/tutorials/intro-to-storybook/',
        navigate: fn()
    }
};
