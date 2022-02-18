import { Story, Meta } from '@storybook/web-components';
import { FileSystem, FileSystemProps } from './FileSystem';

export default {
  title: 'Files/FileSystem',
  argTypes: {
  },
} as Meta;

const Template: Story<Partial<FileSystemProps>> = (args) => new FileSystem(args);

export const Default = Template.bind({});
Default.args = {
  files: [{name: 'Brains@Play', onclick: () => {console.log('test')}}],
};


// export const Stacked = Template.bind({});
// Stacked.args = {
//   brand: {content: 'Brains@Play', link: 'https://brainsatplay.com', external: true},
//   primary,
//   secondary
// };