import project1 from '../images/png/project1.png';
import project2 from '../images/png/project2.png';
import project3 from '../images/png/project3.png';
import jsblog from '../images/png/jsblog.png';
import reactblog from '../images/png/reactblog.png';
import jsblog2 from '../images/png/jsblog2.png';
import htmlblog from '../images/png/htmlblog.png';
import polyblog from '../images/png/polyblog.png';
import ReactLogo from '../images/svg/ReactLogo';
import NextLogo from '../images/svg/NextLogo';
import Js from '../images/svg/Js';
import ReduxLogo from '../images/svg/ReduxLogo';
import JestLogo from '../images/svg/JestLogo';
import RestLogo from '../images/svg/RestLogo';
import StyledCompLogo from '../images/svg/StyledCompLogo';

export const WORK_HISTORY = [
    {
        company: 'Flipkart',
        designation: 'UI Engineer - 2',
        timeline: 'June 2023 - March 2024',
        projects: ['Iris 2.0', 'FK Studio Dashboard', 'KBOT']
    },
    {
        company: 'CampK12',
        designation: 'SDE1 Frontend',
        timeline: 'Jan 2022 - May 2023',
        projects: [
            'CampK12 Website',
            'HatchXR Student Dashboard',
            'HatchXR Teacher Dashboard',
            'Analytics'
        ]
    },
    {
        company: 'PiChain Labs',
        designation: 'Frontend Developer',
        timeline: 'Nov 2020 - Nov 2021',
        projects: ['Esign Web', 'Estamp Web', 'PSPDFKit']
    },
    {
        company: 'FrontRow',
        designation: 'Software Developer Intern',
        timeline: 'Jul 2020 - Sep 2020',
        projects: ['Analytics Dashboard', 'API development']
    }
];

export const PROJECTS = [
    {
        name: 'JsGPT',
        image: project1,
        description:
            'ChatGPT powered Q&A knowledge bot webapp built with ReactJs, Styled Components and Proxy OpenAI completion API.'
    },
    {
        name: 'Stand up',
        image: project2,
        description:
            'A break remainder Progressive Webapp (PWA) which reminds you to stand up & take a break from ur desk, built with NextJs & Styled Components.'
    },
    {
        name: 'Debounce',
        image: project3,
        description:
            'Practical application of debounce & throttling techniques using a search bar. Built with HTML, CSS, Vanilla Javascript.'
    }
];

export const LATEST_BLOG = {
    title: '50 JavaScript Concepts',
    description:
        'List of 50 beginner to advanced javascript concepts with explainations & code snippets.',
    image: jsblog,
    link: 'https://github.com/neeleshio/50-javascript-concepts'
};

export const BLOGS = [
    {
        title: '50 ReactJs Concepts',
        image: reactblog,
        link: 'https://github.com/neeleshio/50-reactjs-concepts'
    },
    {
        title: '50 More JavaScript Concepts',
        image: jsblog2,
        link: 'https://github.com/neeleshio/50-more-javascript-concepts'
    },
    {
        title: '50 HTML-CSS Concepts',
        image: htmlblog,
        link: 'https://github.com/neeleshio/50-html-css-concepts'
    },
    {
        title: '50 JavaScript Polyfills',
        image: polyblog,
        link: 'https://github.com/neeleshio/20-javascript-polyfills'
    }
];

export const SKILLS = [
    {
        name: 'React',
        Icon: ReactLogo
    },
    {
        name: 'JS',
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
        name: 'RestFul',
        Icon: RestLogo
    },
    {
        name: 'Styled',
        Icon: StyledCompLogo
    },
    {
        name: 'Jest',
        Icon: JestLogo
    }
];
