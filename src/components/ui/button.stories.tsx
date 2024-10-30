// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SmallButton: Story = {
  render: () => {
    return (
      <div className="flex gap-4 p-6 bg-secondary">
        <Button size="sm" variant="default">
          Default
        </Button>
        <Button size="sm" variant="destructive">
          Destructive
        </Button>
        <Button size="sm" variant="outline">
          Outline
        </Button>
        <Button size="sm" variant="secondary">
          Secondary
        </Button>
        <Button size="sm" variant="ghost">
          Ghost
        </Button>
        <Button size="sm" variant="link">
          Link
        </Button>
      </div>
    );
  },
};

export const LargeButton: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Button size="lg" variant="default">
          Default
        </Button>
        <Button size="lg" variant="destructive">
          Destructive
        </Button>
        <Button size="lg" variant="outline">
          Outline
        </Button>
        <Button size="lg" variant="secondary">
          Secondary
        </Button>
        <Button size="lg" variant="ghost">
          Ghost
        </Button>
        <Button size="lg" variant="link">
          Link
        </Button>
      </div>
    );
  },
};

export const IconButton: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Button size="icon" variant="default">
          0
        </Button>
        <Button size="icon" variant="destructive">
          0
        </Button>
        <Button size="icon" variant="outline">
          0
        </Button>
        <Button size="icon" variant="secondary">
          0
        </Button>
        <Button size="icon" variant="ghost">
          0
        </Button>
        <Button size="icon" variant="link">
          0
        </Button>
      </div>
    );
  },
};

export const DefaultButton: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Button size="default" variant="default">
          Default
        </Button>
        <Button size="default" variant="destructive">
          Destructive
        </Button>
        <Button size="default" variant="outline">
          Outline
        </Button>
        <Button size="default" variant="secondary">
          Secondary
        </Button>
        <Button size="default" variant="ghost">
          Ghost
        </Button>
        <Button size="default" variant="link">
          Link
        </Button>
      </div>
    );
  },
};

export const CustomButton: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Button className="flex gap-2" size="default" variant="outline">
          Custom button
        </Button>
      </div>
    );
  },
};
