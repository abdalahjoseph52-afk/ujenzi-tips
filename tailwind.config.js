/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], // The Architectural Font
      },
      colors: {
        ujenzi: {
          dark: '#0F172A',   // Deep Navy (from your Logo background)
          card: '#1E293B',   // Slightly lighter navy for cards
          accent: '#F59E0B', // The "Safety Hat" Yellow
          light: '#F8FAFC',  // Off-white for text
        }
      },
      backgroundImage: {
        // This creates a subtle engineering grid pattern
        'blueprint': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}