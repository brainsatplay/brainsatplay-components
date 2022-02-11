import { Story, Meta } from '@storybook/web-components';
import { Contribute, ContributeProps } from './Contribute';

export default {
  title: 'Brand/Contribute',
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

const Template: Story<Partial<ContributeProps>> = (args) => new Contribute(args);

export const Default = Template.bind({});
Default.args = {};
