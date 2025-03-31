import { StorybookConfig } from "@storybook/react-native-web-vite";

const main: StorybookConfig = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      pluginReactOptions: {
        babel: {
          plugins: ["react-native-unistyles/plugin"],
        },
      },
    },
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen",
  },
};

export default main;
