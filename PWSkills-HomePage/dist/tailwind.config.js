/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'], // Adjust paths as per your project
    theme: {
      extend: {
        animation: {
          typewriter: 'typewriter 4s steps(13) 1 normal forwards, blink 0.8s infinite',
        },
        keyframes: {
          typewriter: {
            '0%': { content: "''" },
            '8.3%': { content: "'H'" },
            '16.6%': { content: "'Ha'" },
            '25%': { content: "'Hap'" },
            '33.3%': { content: "'Happ'" },
            '41.6%': { content: "'Happy'" },
            '50%': { content: "'Happy '" },
            '58.3%': { content: "'Happy B'" },
            '66.6%': { content: "'Happy Bi'" },
            '75%': { content: "'Happy Bir'" },
            '83.3%': { content: "'Happy Birt'" },
            '91.6%': { content: "'Happy Birth'" },
            '100%': { content: "'Happy Birthday'" },
          },
          blink: {
            '0%, 100%': { borderColor: 'transparent' },
            '50%': { borderColor: 'black' },
          },
        },
      },
    },
    plugins: [],
  };
  