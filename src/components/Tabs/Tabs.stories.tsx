import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const tabItems = [
  {
    id: "tab1",
    label: "Home",
    content: <div>This is the Home tab content.</div>,
  },
  {
    id: "tab2",
    label: "Profile",
    content: <div>This is the Profile tab content.</div>,
  },
  {
    id: "tab3",
    label: "Settings",
    content: <div>This is the Settings tab content.</div>,
  },
];

// Desktop default (horizontal)
export const Default: Story = {
  name: "Tabs - Desktop View",
  args: {
    items: tabItems,
  },
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

// Vertical tabs for desktop/tablet
export const Vertical: Story = {
  name: "Vertical Tabs - Desktop View",
  args: {
    items: tabItems,
    orientation: "vertical",
  },
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

// Tablet View
export const Tablet: Story = {
  name: "Tabs - Tablet View",
  args: {
    items: tabItems,
  },
  parameters: {
    viewport: { defaultViewport: "ipad" },
  },
};

// Mobile View
export const Mobile: Story = {
  name: "Tabs - Mobile View",
  args: {
    items: tabItems,
  },
  parameters: {
    viewport: { defaultViewport: "iphone12" },
  },
};
