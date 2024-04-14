/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                'primary-bg': 'var(--primary-bg)',
                'primary-color': 'var(--primary-color)',
                cgrey: 'var(--secondary-color)',
                'invert-primary': 'var(--invert-primary)',
                'invert-secondary': 'var(--invert-secondary)',
                navbg: 'var(--nav-bg)',
                'navbg-invert': 'var(--nav-bg-invert)',
                'backdrop-bg': 'var(--menu-backdrop-bg)',
                'menu-bg': 'var(--menu-bg)',
                'menu-color': 'var(--menu-color)',
                'menu-color-light': 'var(--menu-color-light)'
            }
        },
        screens: {
            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' }
            // => @media (max-width: 639px) { ... }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
