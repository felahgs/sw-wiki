import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <Button {...args}>Button</Button>,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => <Button {...args}>Button</Button>,
};
