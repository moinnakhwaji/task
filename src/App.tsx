import { FC } from "react";

import { Accordion } from "./components/Accordion";
import { Sidebar } from "./components/Sidebar";
import { Home, Settings, Info } from "lucide-react";
import { ColorPalette } from "./components/Colors/ColorPalette";

const App: FC = () => {

  const sidebarItems = [
    { label: "Home", href: "#", icon: <Home size={16} /> },
    { label: "Settings", href: "#", icon: <Settings size={16} /> },
    { label: "About", href: "#", icon: <Info size={16} /> },
  ];

  return (
    <div className="min-h-screen flex bg-bg-surface bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar items={sidebarItems} />

      <main className="flex-1 p-6 space-y-6 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Design System App</h1>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
          <ColorPalette />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Accordion Example</h2>
          <Accordion
            items={[
              { title: "First Panel", content: "This is the first panel." },
              { title: "Second Panel", content: "Here's some more content." },
            ]}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
