import { SHARE_BUTTONS } from '@/src/data';
import useOpenLink from '@/src/hooks/useOpenLink';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const ShareButtons = () => {
    const { navigate } = useOpenLink();
    const searchParams = useSearchParams();

    const title = searchParams?.get('title');

    return (
        <div className="flex blog-share">
            {SHARE_BUTTONS(title).map(({ icon: Icon, link }) => (
                <button onClick={() => navigate(link)}>
                    <Icon />
                </button>
            ))}
        </div>
    );
};

export default ShareButtons;
