import type { Meta, StoryObj } from "@storybook/react"
import { Sidebar } from "./Sidebar"
import { Home, Settings, Users } from "lucide-react"

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

const sidebarItems = [
  { label: "Home", href: "#", icon: <Home /> },
  { label: "Users", href: "#", icon: <Users /> },
  { label: "Settings", href: "#", icon: <Settings /> },
]

export const Default: Story = {
  name: "Expanded - Desktop",
  args: {
    items: sidebarItems,
    expanded: true,
  },
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
}

export const Collapsed: Story = {
  name: "Collapsed - Desktop",
  args: {
    items: sidebarItems,
    expanded: false,
  },
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
}

export const Mobile: Story = {
  name: "Sidebar - Mobile View",
  args: {
    items: sidebarItems,
    expanded: false,
  },
  parameters: {
    viewport: { defaultViewport: "iphone12" },
  },
}

export const Tablet: Story = {
  name: "Sidebar - Tablet View",
  args: {
    items: sidebarItems,
    expanded: true,
  },
  parameters: {
    viewport: { defaultViewport: "ipad" },
  },
}
