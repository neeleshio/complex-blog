import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosMail, IoIosLink } from 'react-icons/io';

export const NAVITEMS = [
    { id: 1, title: 'Skills', link: '' },
    { id: 2, title: 'Work History', link: '' },
    { id: 3, title: 'Projects', link: '' },
    { id: 4, title: 'Blog Wall', link: '/' },
    { id: 5, title: 'All Blogs', link: '/all' },
    {
        id: 6,
        title: 'Resume',
        link: 'https://drive.google.com/file/d/1HywlFjChFdpJCmHmA-kjR1-jypJjEWnA/view?usp=sharing',
        target: '_blank'
    },
    {
        id: 7,
        title: 'Documentation',
        link: 'https://github.com/neeleshio/complex/edit/main/README.md',
        target: '_blank'
    },
    { id: 8, title: 'Contact', link: '' }
];

export const SHARE_BUTTONS = (title: string) => [
    {
        id: 1,
        name: 'whatsapp',
        icon: FaWhatsapp,
        link: `https://api.whatsapp.com:/send?text=${title}`
    },
    {
        id: 2,
        name: 'twitter',
        icon: FaXTwitter,
        link: `https://twitter.com/intent/tweet?text=${title}`
    },
    {
        id: 3,
        name: 'mail',
        icon: IoIosMail,
        link: `mailto:?subject=${title}&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/"`
    },
    {
        id: 4,
        name: 'copy',
        icon: IoIosLink,
        link: ''
    }
];
