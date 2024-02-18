import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light-auto",
  tags: ["autodocs"],
} satisfies Meta<typeof Light>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "green",
  },
};
