import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    icon: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    text: "Login",
  },
};
