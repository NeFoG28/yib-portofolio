import {
  Network,
  ShieldCheck,
  ChartColumn,
  Gamepad2,
} from "lucide-react";

export const journeys = [
  {
    id: "network",
    title: "Networking",
    subtitle: "Network Operation Center",
    description: "Keeping infrastructure reliable and connected.",
    icon: Network,
    color: "blue",
  },
  {
    id: "qa",
    title: "Quality Assurance",
    subtitle: "QA Engineer",
    description: "Ensuring quality before every release.",
    icon: ShieldCheck,
    color: "emerald",
  },
  {
    id: "data",
    title: "Data",
    subtitle: "Data Analyst",
    description: "Turning information into valuable insight.",
    icon: ChartColumn,
    color: "amber",
  },
  {
    id: "game",
    title: "Game Development",
    subtitle: "Game Developer",
    description: "Crafting meaningful interactive experiences.",
    icon: Gamepad2,
    color: "purple",
  },
];