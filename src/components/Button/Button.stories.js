import { createButton } from './Button';
import { addCodeExample } from '../../code-example'

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};


export const Primary = createButton({
  primary: true,
  label: 'Button',
});


export const Secondary = createButton({
  label: 'Button',
});


export const Large = createButton({
  size: 'large',
  label: 'Button',
});



export const Small = createButton({
  size: 'small',
  label: 'Button',
})

