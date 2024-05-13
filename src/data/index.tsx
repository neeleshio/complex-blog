import ReactLogo from '../../assets/images/svg/ReactLogo';
import NextLogo from '../../assets/images/svg/NextLogo';
import Js from '../../assets/images/svg/Js';
import ReduxLogo from '../../assets/images/svg/ReduxLogo';
import JestLogo from '../../assets/images/svg/JestLogo';
import RestLogo from '../../assets/images/svg/RestLogo';
import StyledCompLogo from '../../assets/images/svg/StyledCompLogo';
import TailwindLogo from '@/assets/images/svg/TailwindLogo';
import ExpressLogo from '@/assets/images/svg/ExpressLogo';
import NativeLogo from '@/assets/images/svg/NativeLogo';
import Linkedin from '@/assets/images/svg/Linkedin';
import Github from '@/assets/images/svg/Github';
import Mail from '@/assets/images/svg/Mail';
import Phone from '@/assets/images/svg/Phone';
import flipkart from '@/assets/images/png/flipkart.png';
import frontrow from '@/assets/images/png/frontrow.png';
import campk12 from '@/assets/images/png/campk12.png';
import pichain from '@/assets/images/png/pichain.png';
import Jsgpt from '@/assets/images/svg/Jsgpt';
import Standup from '@/assets/images/svg/Standup';
import ReactIcon from '@/assets/images/svg/icons/ReactIcon';
import ReactBlogIcon from '@/assets/images/svg/blogIcons/ReactIcon';
import OpenaiIcon from '@/assets/images/svg/icons/OpenaiIocon';
import ReduxIcon from '@/assets/images/svg/icons/ReduxIcon';
import StyledCompIcon from '@/assets/images/svg/icons/StyledCompIcon';
import JsIcon from '@/assets/images/svg/blogIcons/JsIcon';
import HtmlIcon from '@/assets/images/svg/blogIcons/HtmlIcon';
import JsIcon2 from '@/assets/images/svg/blogIcons/JsIcon2';
import DebounceLogo from '@/assets/images/svg/DebounceLogo';
import StorybookLogo from '@/assets/images/svg/StorybookLogo';
import TSLogo from '@/assets/images/svg/TSLogo';
import Flipkart from '@/assets/images/svg/Flipkart';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosMail, IoIosLink } from 'react-icons/io';
import WebpackLogo from '@/assets/images/svg/WebpackLogo';
import BabelLogo from '@/assets/images/svg/BabelLogo';
import CssIcon from '@/assets/images/svg/blogIcons/CssIcon';
import BlogLogo from '@/assets/images/svg/BlogLogo';

export const SKILLS = [
    {
        id: 1,
        name: 'React',
        icon: ReactLogo
    },
    {
        id: 2,
        name: 'JavaScript',
        icon: Js
    },
    {
        id: 3,
        name: 'TypeScript',
        icon: TSLogo
    },
    {
        id: 4,
        name: 'Redux',
        icon: ReduxLogo
    },
    {
        id: 5,
        name: 'NextJs',
        icon: NextLogo
    },
    {
        id: 6,
        name: 'RestFul',
        icon: RestLogo
    },
    {
        id: 7,
        name: 'Express',
        icon: ExpressLogo
    },
    {
        id: 8,
        name: 'Jest',
        icon: JestLogo
    },
    {
        id: 9,
        name: 'Tailwind CSS',
        icon: TailwindLogo
    },
    {
        id: 10,
        name: 'Styled Comps',
        icon: StyledCompLogo
    },
    {
        id: 11,
        name: 'Storybook',
        icon: StorybookLogo
    },
    {
        id: 12,
        name: 'Webpack',
        icon: WebpackLogo
    },
    {
        id: 13,
        name: 'Babel',
        icon: BabelLogo
    },
    {
        id: 14,
        name: 'React Native',
        icon: NativeLogo
    }
];

export const WORK_HISTORY = [
    {
        id: 1,
        company: 'Recrosoft - Flipkart',
        designation: 'UI Engineer - 2',
        timeline: 'June 2023 - Current',
        projects: ['Iris 2.0', 'FK Studio Dashboard', 'KBOT'],
        image: flipkart,
        latest: true,
        link: 'https://www.flipkartcareers.com/#!/lifeatflipkart'
    },
    {
        id: 2,
        company: 'CampK12',
        designation: 'SDE-1 Frontend',
        timeline: 'Jan 2022 - May 2023',
        projects: [
            'CampK12 Website',
            'HatchXR Student Dashboard',
            'HatchXR Teacher Dashboard',
            'Analytics'
        ],
        image: campk12,
        latest: false,
        link: 'https://campk12.com/'
    },
    {
        id: 3,
        company: 'PiChain Labs',
        designation: 'Frontend Developer',
        timeline: 'Nov 2020 - Nov 2021',
        projects: ['Esign Web', 'Estamp Web', 'PSPDFKit'],
        image: pichain,
        latest: false,
        link: 'https://pichainlabs.com/'
    },
    {
        id: 4,
        company: 'FrontRow',
        designation: 'Software Developer Intern',
        timeline: 'Jul 2020 - Sep 2020',
        projects: ['Analytics Dashboard', 'API development'],
        image: frontrow,
        latest: false,
        link: 'https://www.linkedin.com/company/frontrow-in'
    }
];

export const PROJECTS = [
    {
        id: 1,
        name: 'JsGPT',
        image: Jsgpt,
        description: 'OpenAI proxy completion API powered chatbot webapp.',
        stack: [ReactIcon, OpenaiIcon, ReduxIcon, StyledCompIcon],
        latest: true,
        link: 'https://jsgpt.vercel.app/'
    },
    {
        id: 2,
        name: 'Stand up',
        image: Standup,
        description: 'A break remainder PWA which reminds you to take a break from ur desk.',
        stack: [ReactIcon, OpenaiIcon, ReduxIcon, StyledCompIcon],
        latest: true,
        link: 'https://standup-now.vercel.app/'
    },
    {
        id: 3,
        name: 'Debounce',
        image: DebounceLogo,
        description: 'Debounce & throttling techniques visualizer using a search bar.',
        stack: [ReactIcon, OpenaiIcon, ReduxIcon, StyledCompIcon],
        latest: true,
        link: 'https://neeleshio.github.io/debounce-throttle-visualizer/'
    },
    {
        id: 4,
        name: 'Blog Wall',
        image: BlogLogo,
        description: 'Personal Mdx & Nextjs powered blog site showcase.',
        stack: [ReactIcon, OpenaiIcon, ReduxIcon, StyledCompIcon],
        latest: true,
        link: 'https://www.neeleshio.cloud/blogs'
    }
];

export const BLOGS = [
    {
        id: 1,
        title: (
            <>
                <span className="text-[#007aff]">Async vs Defer script, </span> when and where to
                use.
            </>
        ),
        image: JsIcon,
        link: '/blogs/async-vs-defer?title=Async%20vs%20Defer%20attributes&topic=JavaScript&date=16%20April%202024'
    },
    {
        id: 2,
        title: <span className="custom-color">React SEO and Challenges.</span>,
        image: ReactBlogIcon,
        link: '/blogs/react-seo-and-challenges?title=React%20SEO%20and%20Challenges&topic=React&date=1%20May%202024'
    },
    {
        id: 3,
        title: (
            <>
                CSS Transform
                <span className="text-[#ac39ff]"> and Transition Properties</span>
            </>
        ),
        image: CssIcon,
        link: '/blogs/css-transform-and-transition?title=CSS%20Transform%20and%20Transition%20Properties&topic=CSS&date=11%20May%202024'
    },
    {
        id: 4,
        title: (
            <>
                <span className="text-[#68CC45]">Resource Hints:</span> Preload, Preconnect and
                Prefetch
            </>
        ),
        image: HtmlIcon,
        link: '/blogs/preload-preconnect-prefetch?title=Browser%20Resource%20Hints:%20Preload,%20Preconnect%20and%20Prefetch&topic=HTML&date=8%20May%202024'
    },
    {
        id: 5,
        title: (
            <>
                CSS Frameworks
                <span className="text-[#ac39ff]"> and Preprocessors</span>
            </>
        ),
        image: CssIcon,
        link: '/blogs/css-frameworks-and-preprocessors?title=CSS%20Frameworks%20and%20Preprocessors&topic=CSS&date=9%20May%202024'
    }
];

export const NAVITEMS = [
    { id: 1, title: 'Skills', link: '' },
    { id: 2, title: 'Work History', link: '' },
    { id: 3, title: 'Projects', link: '' },
    { id: 4, title: 'Quick Articles', link: '' },
    { id: 5, title: 'Blog', link: '/blogs', target: '_blank' },
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

export const SOCIALS = [
    {
        id: 'linkedin',
        icon: Linkedin,
        link: 'https://linkedin.com/in/neeleshio'
    },
    {
        id: 'github',
        icon: Github,
        link: 'https://github.com/neeleshio'
    },
    {
        id: 'email',
        icon: Mail,
        link: 'mailto:neeleshiodev@gmail.com'
    },
    {
        id: 'phone',
        icon: Phone,
        link: 'https://web.whatsapp.com'
    }
];

export const QUICK_LINKS = [
    {
        id: 1,
        name: 'Resume',
        link: 'https://drive.google.com/file/d/1HywlFjChFdpJCmHmA-kjR1-jypJjEWnA/view?usp=sharing'
    },
    {
        id: 2,
        name: 'Contact',
        link: 'mailto:neeleshiodev@gmail.com'
    },
    {
        id: 3,
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/neeleshio'
    }
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
