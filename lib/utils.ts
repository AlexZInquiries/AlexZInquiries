import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTagColor = (tag: string): string => {
  const colors = {
    "VST Development": "#4A90E2",
    "UI/UX Design": "#50E3C2",
    "Web Development": "#F5A623",
    "3D Fabrication": "#D0021B",
    // Add more colors for other tags
  };

  return colors[tag as keyof typeof colors] || "#9B9B9B";
};
