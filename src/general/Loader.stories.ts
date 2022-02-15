import { Story, Meta } from '@storybook/web-components';
import { Loader, LoaderProps } from './Loader';

export default {
  title: 'General/Loader',
  argTypes: {
    progress: {
      control: {
        type: 'range', // Type 'select' is automatically inferred when 'options' is defined
        min: 0,
        max: 1,
        step: 0.01, 
      }
    },
  },
} as Meta;

const Template: Story<Partial<LoaderProps>> = (args) => new Loader(args);


export const Default = Template.bind({});
Default.args = {
  progress:0.5
};