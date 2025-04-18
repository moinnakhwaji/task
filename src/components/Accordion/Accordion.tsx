import { useState } from "react"
import type { AccordionProps } from "./Accordion.types"

export const Accordion = ({
  items,
  allowMultiple = false,
  defaultOpenIndices = [],
}: AccordionProps) => {
  const [openIndices, setOpenIndices] = useState<number[]>(defaultOpenIndices)

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenIndices((prev) =>
        prev.includes(index) ? [] : [index]
      )
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index)
        return (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left py-3 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
              id={`accordion-header-${index}`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">{item.title}</span>
                <span className="text-gray-500 dark:text-gray-300">{isOpen ? "−" : "+"}</span>
              </div>
            </button>
            {isOpen && (
              <div
                id={`accordion-panel-${index}`}
                aria-labelledby={`accordion-header-${index}`}
                className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900"
              >
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
