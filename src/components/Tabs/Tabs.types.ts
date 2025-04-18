export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
  }
  
  export interface TabsProps {
    items: TabItem[];
    defaultActiveId?: string;
    orientation?: "horizontal" | "vertical";
  }
  