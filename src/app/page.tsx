/* eslint-disable react/function-component-definition */
import HomePage from '../pages/HomePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Neelesh | Frontend Developer',
    description: 'Designed and Built by Neelesh'
};

export default function Home() {
    return <HomePage />;
}
