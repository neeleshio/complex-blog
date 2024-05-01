import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export type BlogCardProps = {
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
