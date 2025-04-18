import type { Meta, StoryObj } from "@storybook/react";
import { ColorPalette } from "./ColorPalette";

const meta: Meta<typeof ColorPalette> = {
  title: "Foundation/Colors",
  component: ColorPalette,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorPalette>;

export const Mobile: Story = {
  name: "Mobile View",
  parameters: {
    viewport: { defaultViewport: "iphone12" },
  },
  args: {},
};

export const Tablet: Story = {
  name: "Tablet View",
  parameters: {
    viewport: { defaultViewport: "ipad" },
  },
  args: {},
};

export const Desktop: Story = {
  name: "Desktop View",
  args: {},
};
