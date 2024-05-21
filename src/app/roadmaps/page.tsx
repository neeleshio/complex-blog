/* eslint-disable react/function-component-definition */
import RoadmapsPage from '@/src/pages/Roadmaps';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'NSIO | Roadmaps',
    description: 'Roadmaps for learning stacks'
};

export default function Roadmaps() {
    return <RoadmapsPage />;
}
