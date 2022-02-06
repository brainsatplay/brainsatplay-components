import { Story, Meta } from '@storybook/web-components';
import { Rating, RatingProps } from './Rating';

export default {
  title: 'Lit/Rating',
} as Meta;

const Template: Story<Partial<RatingProps>> = (args) => new Rating(args);

export const NoVote = Template.bind({});
NoVote.args = {
  vote: null
};

export const UpVote = Template.bind({});
UpVote.args = {
  vote: 'up'
};

export const DownVote = Template.bind({});
DownVote.args = {
  vote: 'down'
};

