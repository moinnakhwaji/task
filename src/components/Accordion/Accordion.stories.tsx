import type { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "./Accordion"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "responsive", // default for the whole component view
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

// Mobile (e.g., iPhone 12)
export const Mobile: Story = {
  name: "Mobile View",
  parameters: {
    viewport: { defaultViewport: "iphone12" },
  },
  args: {
    items: [
      {
        title: "Accordion on Mobile",
        content: "This is how the accordion behaves on small mobile screens.",
      },
      {
        title: "Responsiveness",
        content: "Ensure it fits well and remains usable on small viewports.",
      },
    ],
    allowMultiple: false,
  },
}

// Tablet (e.g., iPad)
export const Tablet: Story = {
  name: "Tablet View",
  parameters: {
    viewport: { defaultViewport: "ipad" },
  },
  args: {
    items: [
      { title: "Tablet Support", content: "Check spacing and interaction on tablet devices." },
      { title: "iPad Friendly", content: "Ensure touch targets are easy to hit." },
    ],
    allowMultiple: true,
    defaultOpenIndices: [0],
  },
}

// Desktop (default)
export const Desktop: Story = {
  name: "Desktop View",
  args: {
    items: [
      { title: "Item One", content: "Content for desktops with more spacing." },
      { title: "Item Two", content: "Larger screens allow more room to display items." },
    ],
    allowMultiple: true,
  },
}
