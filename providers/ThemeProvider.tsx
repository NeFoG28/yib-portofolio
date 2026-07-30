"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
} from "react";

import {
  JourneyTheme,
  themes,
} from "@/data/themes";

interface ThemeContextType {
  theme: JourneyTheme;
  setTheme: (theme: JourneyTheme) => void;
}

const ThemeContext =
  createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] =
    useState<JourneyTheme>("networking");

  const activeTheme = themes[theme];

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty(
      "--yib-primary",
      activeTheme.colors.primary
    );

    root.style.setProperty(
      "--yib-secondary",
      activeTheme.colors.secondary
    );

    root.style.setProperty(
      "--yib-accent",
      activeTheme.colors.accent
    );

    root.style.setProperty(
      "--yib-background",
      activeTheme.colors.background
    );

    root.style.setProperty(
      "--yib-surface",
      activeTheme.colors.surface
    );

    root.style.setProperty(
      "--yib-text",
      activeTheme.colors.text
    );

    root.style.setProperty(
      "--yib-muted",
      activeTheme.colors.muted
    );
  }, [activeTheme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used inside ThemeProvider."
    );
  }

  return context;
}