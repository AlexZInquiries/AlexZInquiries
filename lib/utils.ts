import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const tagColors = {
  "UI/UX Design": "#FF69B4",
  "Web Development": "#FFD700",
  "VST Development": "#32CD32",
  "3D Fabrication": "#1E90FF",
  // Add more colors for other tags
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTagColor = (tag: string): string => {
  return tagColors[tag as keyof typeof tagColors] || "#9B9B9B";
};

getTagColor.colors = tagColors;
