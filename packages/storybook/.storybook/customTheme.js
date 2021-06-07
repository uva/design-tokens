import { create } from '@storybook/theming/create';
import colorTokens from '../../design-tokens/src/brand/color.json';

export default create({
  base: 'light',
  colorPrimary: colorTokens['uva']['color']['red']['1'].value,

  brandTitle: 'UvA',
  brandUrl: 'https://uva.nl/',
});
