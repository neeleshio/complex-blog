import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export type BlogCardProps = {
    id: number;
    title: string;
    topic: string;
    link: string;
    date: string;
    img: string;
    router: AppRouterInstance;
};

export type NavItemsType = {
    id: number;
    title: string;
    link: string;
    target?: string | undefined;
};

export type NavMenuItemsType = {
    title: string;
    data: {
        name: string;
        link: string;
    }[];
};
