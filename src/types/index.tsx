import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { FC } from 'react';

export type BlogCardProps = {
    title: string;
    topic: string;
    link: string;
    date: string;
    img: string;
    router: AppRouterInstance;
};
