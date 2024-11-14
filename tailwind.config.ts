import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
              'search-background' : 'url(/world-map.png)'
            }
        },
        colors: {
            primary: '#590BD8',
            primaryDarker: '#312A4F',
            primaryLighter: 'DDD5EA',
            grayPrimary: '#717171',
            grayLighter: '#BBBFBF',
            white: '#FFFFFF',
            walterwhite: '#F5F5F5',
            red: '#FF0000',
        },
        textColor: {
            dark: '#717171',
            primary: '#590BD8',
            primaryDarker: '#312A4F',
            white: '#FFFFFF',
            red: '#FF0000',
        },
    },
    plugins: [],
};
export default config;
