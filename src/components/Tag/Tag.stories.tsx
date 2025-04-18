import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  name: "Primary Tag - Default",
  args: {
    label: "Primary Tag",
    variant: "primary",
    size: "md",
  },
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

export const Variants: Story = {
  name: "All Tag Variants",
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag label="Primary" variant="primary" />
      <Tag label="Success" variant="success" />
      <Tag label="Warning" variant="warning" />
      <Tag label="Error" variant="error" />
      <Tag label="Info" variant="info" />
    </div>
  ),
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

// Mobile View
export const Mobile: Story = {
  name: "Tags - Mobile View",
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag label="Primary" variant="primary" />
      <Tag label="Success" variant="success" />
      <Tag label="Warning" variant="warning" />
      <Tag label="Error" variant="error" />
      <Tag label="Info" variant="info" />
    </div>
  ),
  parameters: {
    viewport: { defaultViewport: "iphone12" },
  },
};

// Tablet View
export const Tablet: Story = {
  name: "Tags - Tablet View",
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag label="Primary" variant="primary" />
      <Tag label="Success" variant="success" />
      <Tag label="Warning" variant="warning" />
      <Tag label="Error" variant="error" />
      <Tag label="Info" variant="info" />
    </div>
  ),
  parameters: {
    viewport: { defaultViewport: "ipad" },
  },
};
