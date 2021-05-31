module.exports = {
  stories: ['../src/**/*stories.@(js|mdx)'],
  features: {
    postcss: false,
  },
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-notes/register',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status/register',
    'storybook-addon-mdx-embed',
  ],
};
