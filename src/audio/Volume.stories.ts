import { Story, Meta } from '@storybook/web-components';
import { Volume, VolumeProps } from './Volume';

export default {
  title: 'Audio/Volume',
  argTypes: {
    count: {
      control: {
        type: 'number', // Type 'select' is automatically inferred when 'options' is defined
        min: 0,
        max: 100,
        step: 1, 
      }
    },
    volume: {
      control: {
        type: 'range', // Type 'select' is automatically inferred when 'options' is defined
        min: 0,
        max: 1,
        step: 0.01, 
      }
    },
    backgroundColor: {
      control: {
        type: 'color', // Type 'select' is automatically inferred when 'options' is defined
      }
    }
  }
} as Meta;

const Template: Story<Partial<VolumeProps>> = (args) => new Volume(args);

export const DefaultVolume = Template.bind({});
DefaultVolume.args = {
  // volume: 0
};

export const HalfVolume = Template.bind({});
HalfVolume.args = {
  volume: 0.5
};

export const FullVolume = Template.bind({});
FullVolume.args = {
  volume: 1
};
