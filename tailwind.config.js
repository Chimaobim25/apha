/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
      "custom": "url('/image/istockphoto-2228038945-612x612.jpg')",
      "footer-texture": "url('/image/gettyimages-942149960-612x612 (1).jpg')",
      },
    },
  },
  plugins: [],
};

