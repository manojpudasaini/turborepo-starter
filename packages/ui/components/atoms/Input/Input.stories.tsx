import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./";

const meta: Meta<typeof InputField> = {
  title: "Atoms/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {
    label: "email",
    placeholder: "Enter your email",
    value: "",
  },
  argTypes: {
    required: { type: "string" },
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;
export const Primary: Story = {
  args: {
    disabled: false,
  },
};
