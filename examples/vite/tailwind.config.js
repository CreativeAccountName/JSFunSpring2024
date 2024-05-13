/** @type {import('tailwindcss').Config} */
export default {
  /**
   * You need to tell Tailwind what files are using Tailwind.
   * This will parse all your HTML files, and all JavaScript inside `src/`
   */
  content: ["./**/*.html", "./src/*.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
