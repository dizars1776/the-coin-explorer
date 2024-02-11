/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                'cryptic': '#13182C',
                'cryptic-lighter': '#363E50',
                'cryptic-darker': '#1C2436',
            },
            animation: {
                flow: 'flow 3.5s ease-in-out 0s infinite normal none running'
            },
            keyframes: {
                flow: {
                    '0%': { transform: 'translate(0)' },
                    '50%': { transform: 'translate(-5%, -5%)' },
                    '100%': { transform: 'translate(0%)' },
                },
            },
        },
        fontFamily: {
            pump: ['Sixtyfour'],
        },
    },
    plugins: [],
}

