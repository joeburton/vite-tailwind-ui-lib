import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './box';

const meta = {
  title: 'Pure/Box',
  component: Box,
  tags: ['docsPage'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Box Title',
    description: 'This is a Box',
  },
};
