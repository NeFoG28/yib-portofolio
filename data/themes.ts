export type JourneyTheme =
  | "networking"
  | "qa"
  | "data"
  | "game";

export interface ThemeConfig {
  name: string;
  label: string;

  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
  };

  description: string;
}

export const themes: Record<JourneyTheme, ThemeConfig> = {
  networking: {
    name: "Networking",
    label: "Network Operations",

    colors: {
      primary: "#315C72",
      secondary: "#527C8F",
      accent: "#6F9FB2",
      background: "#F4F8FA",
      surface: "#FFFFFF",
      text: "#20323B",
      muted: "#6B7F88",
    },

    description:
      "Connection, infrastructure, reliability, and systems.",
  },

  qa: {
    name: "QA",
    label: "Quality Assurance",

    colors: {
      primary: "#527A69",
      secondary: "#6F9381",
      accent: "#91AE9E",
      background: "#F4F8F5",
      surface: "#FFFFFF",
      text: "#25362D",
      muted: "#718078",
    },

    description:
      "Precision, observation, validation, and control.",
  },

  data: {
    name: "Data",
    label: "Data & Analysis",

    colors: {
      primary: "#8A7350",
      secondary: "#A28B65",
      accent: "#B9A57D",
      background: "#FAF8F3",
      surface: "#FFFFFF",
      text: "#383226",
      muted: "#81796B",
    },

    description:
      "Structure, information, patterns, and insight.",
  },

  game: {
    name: "Game Dev",
    label: "Game Development",

    colors: {
      primary: "#665A78",
      secondary: "#7C6E91",
      accent: "#9A8CAF",
      background: "#F7F5FA",
      surface: "#FFFFFF",
      text: "#302B39",
      muted: "#777080",
    },

    description:
      "Creation, experimentation, play, and imagination.",
  },
};