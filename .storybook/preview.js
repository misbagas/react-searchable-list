/** @type { import('@storybook/react').Preview } */
import "../src/index.css"; // 👈 Add this line to load Tailwind styles

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;