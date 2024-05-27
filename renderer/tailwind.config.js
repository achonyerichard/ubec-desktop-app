const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  
    extend: {
      colors: {
        lmsRed: "#EB420E",
        lmsGreen: "#A2BF00",
        lmsBlue: "#08A5D3",
        lmsWhite: "#ffffff",
        lmsYellow: "#FDDF2F",
        lmsBlack: "#111624",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require

    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });
    }),
  ],
}
