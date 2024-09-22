/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                'primary': '#C4F82A',
                'gray': {
                    900: '#141414',
                    800: '#1F1F1F',
                    700: '#333',
                }
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

