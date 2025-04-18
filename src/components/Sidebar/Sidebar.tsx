import { useState } from "react";
import type { SidebarProps } from "./Sidebar.types";
import { ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider"; // adjust this import path if needed

export const Sidebar = ({ items, expanded = false }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const { theme, toggleTheme } = useTheme();

  return (
    <aside
      className={`h-screen flex flex-col justify-between transition-all duration-300
        ${isExpanded ? "w-64" : "w-16"} 
        bg-white text-black dark:bg-gray-900 dark:text-white
        w-20 lg:w-64`} // sm:w-20 sets a smaller width for small screens, lg:w-64 for larger screens
    >
      {/* Top Section */}
      <div className="flex-1">
        <div className="flex items-center justify-between px-4 py-4">
          <h2 className={`text-lg font-semibold ${!isExpanded && "hidden"}`}>
            Sidebar
          </h2>
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="focus:outline-none hidden md:flex text-gray-700 dark:text-gray-300"
          >
            {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <nav className="flex flex-col space-y-2 px-4"> {/* Make items appear vertically one by one */}
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex items-center gap-3 text-sm py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <span>{item.icon}</span>
              {isExpanded && <span>{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Section - Theme Toggle */}
      <div className="p-4">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-md 
                     bg-gray-200 hover:bg-gray-300 
                     dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          {isExpanded && <span>Toggle Theme</span>}
        </button>
      </div>
    </aside>
  );
};
