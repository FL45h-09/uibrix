/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brockmann: ["var(--font-brockmann)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"], // Optional: if you also variable-loaded poppins
      },
    },
  },
  plugins: [],
}