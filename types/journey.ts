import { JourneyTheme } from "@/data/themes";

export interface Journey {
  id: JourneyTheme;
  title: string;
  subtitle: string;
  description: string;
  iconName: JourneyTheme;
  color: string;
}