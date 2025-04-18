import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { Home, Settings, Users } from "lucide-react";

// Default export metadata
const meta = {
  title: "Example/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sidebar items used in all stories
const sidebarItems = [
  { label: "Home", href: "#", icon: <Home /> },
  { label: "Users", href: "#", icon: <Users /> },
  { label: "Settings", href: "#", icon: <Settings /> },
];

// Expanded Sidebar (Desktop)
export const Expanded: Story = {
  name: "Expanded - Desktop",
  args: {
    items: sidebarItems,
    expanded: true,
  },
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

// Collapsed Sidebar (Desktop)
export const Collapsed: Story = {
  name: "Collapsed - Desktop",
  args: {
    items: sidebarItems,
    expanded: false,
  },
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

// Sidebar on Mobile
export const Mobile: Story = {
  name: "Mobile View",
  args: {
    items: sidebarItems,
    expanded: false,
  },
  parameters: {
    viewport: { defaultViewport: "iphone12" },
  },
};

// Sidebar on Tablet
export const Tablet: Story = {
  name: "Tablet View",
  args: {
    items: sidebarItems,
    expanded: true,
  },
  parameters: {
    viewport: { defaultViewport: "ipad" },
  },
};
