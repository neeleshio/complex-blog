import { TOPICS } from '../constants';
const { REACT, CSS, HTML, JAVASCRIPT, GIT } = TOPICS;

export const LATEST_BLOG = {
    id: 1,
    title: 'Setting-up React without using create-react-app',
    topic: REACT,
    link: 'react-without-cra',
    tags: ['js', 'javascript', 'html', 'react', 'babel', 'webpack', 'npm', 'react-dom'],
    date: '28 April 2024',
    img: '/react-3d.png'
};

export const BLOG_DATA = [
    {
        id: 1,
        title: 'Arrow Functions',
        topic: JAVASCRIPT,
        link: 'arrow-functions',
        tags: ['javascript', 'typescript', 'es6', 'functions'],
        date: '16 April 2024',
        img: '/arrow-functions.png'
    },
    {
        id: 2,
        title: 'Async vs Defer attributes',
        topic: JAVASCRIPT,
        link: 'async-vs-defer',
        tags: ['javascript', 'typescript', 'dom', 'vanillajs', 'html'],
        date: '16 April 2024',
        img: '/async-vs-defer.png'
    },
    {
        id: 3,
        title: 'Virtual DOM and DOM update process',
        topic: REACT,
        link: 'real-dom-vs-virtual-dom',
        tags: [
            'react',
            'javascript',
            'nextjs',
            'typescript',
            'dom',
            'vdom',
            'realdom',
            'virtual dom'
        ],
        date: '15 April 2024',
        img: '/react-vdom.png'
    },
    {
        id: 4,
        title: 'Higher order components',
        topic: REACT,
        link: 'higher-order-components',
        tags: ['react', 'javascript', 'nextjs', 'typescript', 'hoc', 'reuse'],
        date: '14 April 2024',
        img: '/hoc.png'
    },
    {
        id: 5,
        title: 'JSX Transform - New Update',
        topic: REACT,
        link: 'jsx-transform',
        tags: ['react', 'javascript', 'jsx', 'nextjs', 'babel', 'typescript'],
        date: '14 April 2024',
        img: '/jsx-transform.png'
    },
    {
        id: 6,
        title: 'Specificity, Cascading and Inheritance in CSS',
        topic: CSS,
        link: 'specificity-cascading-and-inheritance',
        tags: [
            'css',
            'javascript',
            'html',
            'specificity',
            'stylesheet',
            'cascading',
            'sass',
            'tailwind'
        ],
        date: '22 April 2024',
        img: '/specificity.png'
    },
    {
        id: 7,
        title: 'Setting-up React without using create-react-app',
        topic: REACT,
        link: 'react-without-cra',
        tags: ['js', 'javascript', 'html', 'react', 'babel', 'webpack', 'npm', 'react-dom'],
        date: '28 April 2024',
        img: '/react-wo-cra.png'
    },
    {
        id: 8,
        title: 'Semantic HTML and SEO',
        topic: HTML,
        link: 'semantic-html-and-seo',
        tags: [
            'html',
            'seo',
            'semantic',
            'webcrawling',
            'crawling',
            'indexing',
            'ranking',
            'accessibility'
        ],
        date: '30 April 2024',
        img: '/semantic-html.png'
    },
    {
        id: 9,
        title: 'Sitemap.xml vs Robots.txt',
        topic: HTML,
        link: 'sitemap-vs-robotstxt',
        tags: [
            'sitemap',
            'seo',
            'html',
            'robots.txt',
            'webcrawling',
            'crawling',
            'indexing',
            'ranking'
        ],
        date: '30 April 2024',
        img: '/sitemap-vs-robotstxt.png'
    },
    {
        id: 10,
        title: 'React SEO and Challenges',
        topic: REACT,
        link: 'react-seo-and-challenges',
        tags: [
            'sitemap',
            'seo',
            'html',
            'robots.txt',
            'webcrawling',
            'crawling',
            'indexing',
            'ranking',
            'googlebot',
            'metadata',
            'ogtag',
            'react helmet',
            'helmet',
            'tree shaking',
            'prerendering',
            'ssr'
        ],
        date: '1 May 2024',
        img: '/react-seo-and-challenges.png'
    },
    {
        id: 11,
        title: 'Testing React App with Jest and RTL',
        topic: REACT,
        link: 'testing-react-app',
        tags: [
            'react',
            'testing',
            'rtl',
            'jest',
            'react-testing-library',
            'unit testing',
            'matchers',
            'mock'
        ],
        date: '3 May 2024',
        img: '/testing-react-app.png'
    },
    {
        id: 12,
        title: 'The Best ESlint Rules and Plugins for React projects',
        topic: REACT,
        link: 'best-eslint-rules-and-plugins',
        tags: ['react', 'testing', 'linting', 'eslint', 'prittier', 'plugins', 'rules'],
        date: '4 May 2024',
        img: '/eslint.png'
    },
    {
        id: 13,
        title: 'Git Hooks and Husky',
        topic: GIT,
        link: 'git-hooks-and-husky',
        tags: ['git', 'husky', 'devops', 'cicd', 'automate', 'git hooks', 'hooks'],
        date: '5 May 2024',
        img: '/git-hooks.jpg'
    },
    {
        id: 14,
        title: 'HTML, HTML5 and Web APIs',
        topic: HTML,
        link: 'html-html5-and-webapis',
        tags: [
            'html',
            'webapis',
            'html5',
            'storage',
            'geolocation',
            'webworker',
            'localstorage',
            'sessionstorage'
        ],
        date: '7 May 2024',
        img: '/html5.png'
    },
    {
        id: 15,
        title: 'Difference between document and window objects',
        topic: HTML,
        link: 'diff-btw-document-and-window',
        tags: ['html', 'document', 'window', 'iframe', 'difference'],
        date: '7 May 2024',
        img: '/window-vs-document.png'
    },
    {
        id: 16,
        title: 'Browser Resource Hints: Preload, Preconnect and Prefetch',
        topic: HTML,
        link: 'preload-preconnect-prefetch',
        tags: [
            'html',
            'preload',
            'preconnect',
            'prefetch',
            'resource-hint',
            'optimisation',
            'dns-lookup',
            'prerender'
        ],
        date: '8 May 2024',
        img: '/prefetch.png'
    },
    {
        id: 17,
        title: 'Web Accessibility Best Practices',
        topic: HTML,
        link: 'web-accessibility-practices',
        tags: ['html', 'web', 'accessibility', 'aria', 'role', 'practices'],
        date: '8 May 2024',
        img: '/web-accessibilty.png'
    },
    {
        id: 18,
        title: 'Rendering Webpage in the browser - BTS',
        topic: HTML,
        link: 'rendering-webpage-in-browser',
        tags: [
            'html',
            'rendering',
            'webpage',
            'browser',
            'dom',
            'cssom',
            'parsing',
            'tree',
            'layout',
            'paint',
            'repaint',
            'reflow'
        ],
        date: '8 May 2024',
        img: '/rendering-process.png'
    },
    {
        id: 19,
        title: 'Reflow and Repaint',
        topic: HTML,
        link: 'reflow-and-repaint',
        tags: ['reflow', 'repaint', 'dom', 'rendering', 'cssdom', 'rendertree', 'dom', 'cssom'],
        date: '8 May 2024',
        img: '/repaint.png'
    },
    {
        id: 20,
        title: 'CSS Box Model and Display Properties',
        topic: CSS,
        link: 'box-model-and-display-properties',
        tags: [
            'css',
            'box-model',
            'display',
            'block',
            'inline',
            'inline-block',
            'box-sizing',
            'border-box'
        ],
        date: '9 May 2024',
        img: '/box-model.png'
    },
    {
        id: 21,
        title: 'CSS Frameworks and Preprocessors',
        topic: CSS,
        link: 'css-frameworks-and-preprocessors',
        tags: [
            'css',
            'framework',
            'preprocessor',
            'library',
            'sass',
            'mui',
            'tailwind',
            'less',
            'bootstrap',
            'difference'
        ],
        date: '9 May 2024',
        img: '/css-frameworks.png'
    },
    {
        id: 22,
        title: 'CSS Selectors',
        topic: CSS,
        link: 'css-selectors',
        tags: ['css', 'selectors', 'id', 'class', 'combinators', 'sibling', 'psudo', 'attributes'],
        date: '10 May 2024',
        img: '/css-selectors.png'
    },
    {
        id: 23,
        title: 'CSS Position Property',
        topic: CSS,
        link: 'css-position-property',
        tags: ['css', 'position', 'absolute', 'relative', 'fixed', 'static', 'sticky', 'z-index'],
        date: '10 May 2024',
        img: '/css-position.png'
    },
    {
        id: 24,
        title: 'CSS Units',
        topic: CSS,
        link: 'css-units',
        tags: ['css', 'units', 'rem', 'em', 'px', 'pixels', 'font-size', 'root'],
        date: '10 May 2024',
        img: '/css-units.png'
    },
    {
        id: 25,
        title: 'A Guide to CSS Media Queries',
        topic: CSS,
        link: 'guide-to-css-media-queries',
        tags: ['css', 'media-queries', 'html'],
        date: '11 May 2024',
        img: '/media-queries.png'
    },
    {
        id: 26,
        title: 'CSS Transform and Transition Properties',
        topic: CSS,
        link: 'css-transform-and-transition',
        tags: ['css', 'transform', 'transition', 'animation', 'translate', 'scale', 'rotate'],
        date: '11 May 2024',
        img: '/transition-and-transform.png'
    },
    {
        id: 27,
        title: 'Reset vs Normalize CSS',
        topic: CSS,
        link: 'reset-vs-normalize-css',
        tags: ['css', 'reset', 'normalize'],
        date: '11 May 2024',
        img: '/reset-css.png'
    },
    {
        id: 28,
        title: 'SASS Complete Guide',
        topic: CSS,
        link: 'sass-complete-guide',
        tags: ['css', 'sass', 'guide', 'preprocessor'],
        date: '14 May 2024',
        img: '/sass.png'
    },
    {
        id: 29,
        title: 'Styled Components Guide',
        topic: CSS,
        link: 'styled-components-guide',
        tags: ['css', 'sass', 'guide', 'styled'],
        date: '14 May 2024',
        img: '/styled-components.png'
    },
    {
        id: 30,
        title: 'Flexbox Complete Guide',
        topic: CSS,
        link: 'flexbox-guide',
        tags: ['css', 'flexbox', 'grid', 'responsive'],
        date: '15 May 2024',
        img: '/flex-box.png'
    },
    {
        id: 31,
        title: 'CSS Grid Complete Guide',
        topic: CSS,
        link: 'css-grid-guide',
        tags: ['css', 'flexbox', 'grid', 'responsive'],
        date: '16 May 2024',
        img: '/css-grid.png'
    },
    {
        id: 32,
        title: 'Library vs Framework',
        topic: REACT,
        link: 'library-vs-framework',
        tags: ['library', 'framework', 'difference', 'opinionated', 'un-opinionated'],
        date: '19 May 2024',
        img: '/library-vs-framework.png'
    },
    {
        id: 32,
        title: 'What is React and its Advantages',
        topic: REACT,
        link: 'react-and-advantages',
        tags: [
            'library',
            'framework',
            'difference',
            'opinionated',
            'un-opinionated',
            'props',
            'cons',
            'react'
        ],
        date: '20 May 2024',
        img: '/react.png'
    },
    {
        id: 33,
        title: 'Types of Web Applications',
        topic: REACT,
        link: 'types-of-applications',
        tags: ['types', 'web apps', 'react', 'static', 'dynamic', 'spa', 'mva', 'pwa'],
        date: '20 May 2024',
        img: '/types-of-applications.png'
    }
];
