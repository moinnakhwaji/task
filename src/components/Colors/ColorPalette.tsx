const colorTokens = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "info",
  "warning",
  "error",
  "gray-100",
  "gray-300",
  "gray-500",
  "gray-700",
  "gray-900",
  "bg-surface",
  "bg-muted",
];

export const ColorPalette = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 bg-white text-black dark:bg-gray-900 dark:text-white">
      {colorTokens.map((token) => (
        <div key={token} className="flex items-center space-x-3">
          <div
            className="w-10 h-10 rounded border border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: `var(--color-${token})` }}
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">{`--color-${token}`}</span>
        </div>
      ))}
    </div>
  );
};
