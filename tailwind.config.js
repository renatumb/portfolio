/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                colorPrimary: 'hsl(var(--color-primary)  / <alpha-value>)',
                colorSecondary: 'hsl(var(--color-secondary)/ <alpha-value>)',
                colorAccent1: 'hsl(var(--color-accent1)  / <alpha-value>)',
                colorAccent2: 'hsl(var(--color-accent2)  / <alpha-value>)',
                colorAccent3: 'hsl(var(--color-accent3)  / <alpha-value>)',
            },
            keyframes: {
                'pushEffect' :{
                    '0%'  :  { opacity: '0',   transform:'scale(1)'},
                    '10%'  :  { opacity: '1', transform:'scale(1.1)'  },
                    '12%'  :  { opacity: '0',   },
                    '100%':  { opacity: '0', },
                }
            },
            animation: {
                pushEffect1:  'pushEffect 29s linear infinite 0s',
                pushEffect2:  'pushEffect 29s linear infinite 3s',
                pushEffect3:  'pushEffect 29s linear infinite 6s',
                pushEffect4:  'pushEffect 29s linear infinite 9s',
                pushEffect5:  'pushEffect 29s linear infinite 12s',
                pushEffect6:  'pushEffect 29s linear infinite 15s',
                pushEffect7:  'pushEffect 29s linear infinite 18s',
                pushEffect8:  'pushEffect 29s linear infinite 21s',
                pushEffect9:  'pushEffect 29s linear infinite 24s',
                pushEffect10: 'pushEffect 29s linear infinite 27s',


            }
        },
        container: {
            center: true
        },
        fontFamily: {
            oswald: ['Oswald', 'sans-serif'],
        },
    },
    plugins: [],
}

