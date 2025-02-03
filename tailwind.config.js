/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.{html,js}', 
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        serif: [ 'Advent Pro', 'serif']
      }
    },
    screens:{
      xxm:'20rem',
      xm: '25rem',
      sm:'28.125rem',
      md:'47.9375rem',
      lg:'63.75rem',
      xl:'90rem'
    },
  },
  plugins: [],
}