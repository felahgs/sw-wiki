import type { Meta, StoryObj } from "@storybook/react";

import CustomLink from "./CustomLink";

const meta = {
  component: CustomLink,
} satisfies Meta<typeof CustomLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    children: "Link",
  },
};

export const Active: Story = {
  args: {
    href: "/",
    active: true,
    children: "Link",
  },
};
