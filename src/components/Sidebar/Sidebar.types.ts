export interface SidebarItem {
    label: string
    icon?: React.ReactNode
    href?: string
    children?: SidebarItem[]
  }
  
  export interface SidebarProps {
    items: SidebarItem[]
    collapsible?: boolean
    expanded?: boolean
  }
  