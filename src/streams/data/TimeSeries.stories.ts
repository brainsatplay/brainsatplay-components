import { Story, Meta } from '@storybook/web-components';
import { TimeSeries, TimeSeriesProps } from './TimeSeries';

export default {
  title: 'Streams/Data/TimeSeries',
  argTypes: {
    count: {
      control: {
        type: 'number', // Type 'select' is automatically inferred when 'options' is defined
        min: 0,
        max: 100,
        step: 1, 
      }
    },
    TimeSeries: {
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

const Template: Story<Partial<TimeSeriesProps>> = (args) => new TimeSeries(args);

export const Default = Template.bind({});
Default.args = {
  // TimeSeries: 0
};