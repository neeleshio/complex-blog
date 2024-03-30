// import project1 from '../images/png/project1.png';
// import project2 from '../images/png/project2.png';
// import project3 from '../images/png/project3.png';
// import jsblog from '../images/png/jsblog.png';
// import reactblog from '../images/png/reactblog.png';
// import jsblog2 from '../images/png/jsblog2.png';
// import htmlblog from '../images/png/htmlblog.png';
// import polyblog from '../images/png/polyblog.png';
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
import campk12 from '@/assets/images/png/campk12.png';
import pichain from '@/assets/images/png/pichain.png';

export const WORK_HISTORY = [
    {
        company: 'Recrosoft - Flipkart',
        designation: 'UI Engineer - 2',
        timeline: 'June 2023 - March 2024',
        projects: ['Iris 2.0', 'FK Studio Dashboard', 'KBOT'],
        image: flipkart,
        latest: true
    },
    {
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
        latest: false
    },
    {
        company: 'PiChain Labs',
        designation: 'Frontend Developer',
        timeline: 'Nov 2020 - Nov 2021',
        projects: ['Esign Web', 'Estamp Web', 'PSPDFKit'],
        image: pichain,
        latest: false
    }
    // {
    //     company: 'FrontRow',
    //     designation: 'Software Developer Intern',
    //     timeline: 'Jul 2020 - Sep 2020',
    //     projects: ['Analytics Dashboard', 'API development']
    // }
];

// export const PROJECTS = [
//     {
//         name: 'JsGPT',
//         image: project1,
//         description:
//             'ChatGPT powered Q&A knowledge bot webapp built with ReactJs, Styled Components and Proxy OpenAI completion API.'
//     },
//     {
//         name: 'Stand up',
//         image: project2,
//         description:
//             'A break remainder Progressive Webapp (PWA) which reminds you to stand up & take a break from ur desk, built with NextJs & Styled Components.'
//     },
//     {
//         name: 'Debounce',
//         image: project3,
//         description:
//             'Practical application of debounce & throttling techniques using a search bar. Built with HTML, CSS, Vanilla Javascript.'
//     }
// ];

// export const LATEST_BLOG = {
//     title: '50 JavaScript Concepts',
//     description:
//         'List of 50 beginner to advanced javascript concepts with explainations & code snippets.',
//     image: jsblog,
//     link: 'https://github.com/neeleshio/50-javascript-concepts'
// };

// export const BLOGS = [
//     {
//         title: '50 ReactJs Concepts',
//         image: reactblog,
//         link: 'https://github.com/neeleshio/50-reactjs-concepts'
//     },
//     {
//         title: '50 More JavaScript Concepts',
//         image: jsblog2,
//         link: 'https://github.com/neeleshio/50-more-javascript-concepts'
//     },
//     {
//         title: '50 HTML-CSS Concepts',
//         image: htmlblog,
//         link: 'https://github.com/neeleshio/50-html-css-concepts'
//     },
//     {
//         title: '50 JavaScript Polyfills',
//         image: polyblog,
//         link: 'https://github.com/neeleshio/20-javascript-polyfills'
//     }
// ];

export const SKILLS = [
    {
        name: 'React',
        Icon: ReactLogo
    },
    {
        name: 'JavaScript',
        Icon: Js
    },
    {
        name: 'Redux',
        Icon: ReduxLogo
    },
    {
        name: 'NextJs',
        Icon: NextLogo
    },
    {
        name: 'Express',
        Icon: ExpressLogo
    },
    {
        name: 'Jest',
        Icon: JestLogo
    },
    {
        name: 'Tailwind CSS',
        Icon: TailwindLogo
    },
    {
        name: 'Styled Comps',
        Icon: StyledCompLogo
    },
    {
        name: 'React Native',
        Icon: NativeLogo
    }
];

export const NAVITEMS = [
    { id: 1, title: 'Work', link: '' },
    { id: 2, title: 'Skills', link: '' },
    { id: 3, title: 'Projects', link: '' },
    { id: 4, title: 'Blog', link: '' }
];

export const SOCIALS = [
    {
        id: 'linkedin',
        icon: Linkedin
    },
    {
        id: 'github',
        icon: Github
    },
    {
        id: 'email',
        icon: Mail
    },
    {
        id: 'phone',
        icon: Phone
    }
];
