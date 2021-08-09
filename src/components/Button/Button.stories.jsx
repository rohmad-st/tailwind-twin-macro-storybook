/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'success', 'info', 'warning', 'error'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'lg', 'xl'],
      },
    },
    children: { control: 'text' },
  },
};

const Template = args => <Button {...args} />;

export const Example = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 'sm',
  children: 'Button Text',
};
