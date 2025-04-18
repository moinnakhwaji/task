import { TagProps } from "./Tag.types";
import clsx from "clsx";

const variantClasses = {
  primary: "bg-indigo-500 text-white",
  success: "bg-green-500 text-white",
  warning: "bg-yellow-400 text-black",
  error: "bg-red-500 text-white",
  info: "bg-blue-500 text-white",
};

const sizeClasses = {
  sm: "text-xs px-2 py-1",
  md: "text-sm px-3 py-1.5",
  lg: "text-base px-4 py-2",
};

export const Tag = ({ label, variant = "primary", size = "md" }: TagProps) => {
  return (
    <span
      className={clsx(
        "inline-block rounded-full font-medium",
        variantClasses[variant],
        sizeClasses[size],
        "sm:text-xs sm:px-2 sm:py-1 md:text-sm md:px-3 md:py-1.5 lg:text-base lg:px-4 lg:py-2" // Add responsive classes here
      )}
    >
      {label}
    </span>
  );
};
