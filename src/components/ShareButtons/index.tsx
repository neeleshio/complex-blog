import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosMail, IoIosLink } from 'react-icons/io';

const ShareButtons = () => {
    const icons = [FaWhatsapp, FaXTwitter, IoIosMail, IoIosLink];

    return (
        <div className="flex blog-share">
            {icons.map((Icon) => (
                <button>
                    <Icon color="red" />
                </button>
            ))}
        </div>
    );
};

export default ShareButtons;
