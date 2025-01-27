// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // Redefining default breakpoints
      ...defaultTheme.screens,
      
      // Custom named breakpoints
      'xs': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',

      // Min-max breakpoints using the new v4 syntax
      'sm-max': {'@media': '(max-width: 576px)'},
      'md-max': {'@media': '(max-width: 768px)'},
      'lg-max': {'@media': '(max-width: 1024px)'},
      
      // Range breakpoints using the new v4 syntax
      'sm-only': {'@media': '(min-width: 576px) and (max-width: 767px)'},
      'md-only': {'@media': '(min-width: 768px) and (max-width: 1023px)'},
      'lg-only': {'@media': '(min-width: 1024px) and (max-width: 1279px)'},
    },
  },
  plugins: [],
}