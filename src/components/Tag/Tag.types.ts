export type TagVariant = "primary" | "success" | "warning" | "error" | "info";

export interface TagProps {
  label: string;
  variant?: TagVariant;
  size?: "sm" | "md" | "lg";
}
