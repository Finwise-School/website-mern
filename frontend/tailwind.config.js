const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend:{
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slide: {
          '0%, 100%': { opacity: 0, transform: 'translateX(100%)' }, 
          '33.33%': { opacity: 1, transform: 'translateX(0)' }, 
        }
      },
      animation: {
        'carousel-slide': 'slide 6s infinite', 
      },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
}