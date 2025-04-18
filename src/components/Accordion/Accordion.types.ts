export interface AccordionItem {
    title: string
    content: React.ReactNode
  }
  
  export interface AccordionProps {
    items: AccordionItem[]
    allowMultiple?: boolean
    defaultOpenIndices?: number[]
  }
  