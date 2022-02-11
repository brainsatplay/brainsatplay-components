import { Story, Meta } from '@storybook/web-components';
import { Nav, NavProps } from './Nav';

export default {
  title: 'General/Nav',
  argTypes: {
    verb: {
      options: ['contribute', 'donate'],
      control: { type: 'select' },
    },
    color: {
      options: ['blue', 'white'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<Partial<NavProps>> = (args) => new Nav(args);

export const Default = Template.bind({});
Default.args = {
  brand: {content: 'Brains@Play', link: 'https://brainsatplay.com'},
  primary: {
    menu: [
      {content: 'Products'},
      {content: 'Solutions'},
      {content: 'Services'},
      {content: 'Resources'},
      {content: 'Ethos'}

    ],
    options: [
      {content: 'Contact'},
      {content: 'Login'}
    ]
  },
  secondary: [
    {content: 'Platform', link: 'https://app.brainsatplay.com'},
    {content: 'Studio', link: 'https://studio.brainsatplay.com'},
    {content: 'Developers', link: 'https://docs.brainsatplay.com'},
    {content: 'Community', link: 'https://discord.gg/tQ8P79tw8j'},
    {content: 'Contribute', type: 'button', link: 'https://github.com/brainsatplay'},
  ]
};
