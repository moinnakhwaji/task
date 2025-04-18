import type { Preview } from '@storybook/react'
// .storybook/preview.js
import '../src/index.css'; // adjust if your Tailwind file is in another place


const preview: Preview = {
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