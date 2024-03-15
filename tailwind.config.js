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

