"use client";

import {
  Network,
  ShieldCheck,
  ChartColumn,
  Gamepad2,
} from "lucide-react";

import { Journey } from "@/types/journey";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  journey: Journey;
}

const icons = {
  networking: Network,
  qa: ShieldCheck,
  data: ChartColumn,
  game: Gamepad2,
};

export default function JourneyCard({ journey }: Props) {
  const Icon = icons[journey.iconName];
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(journey.id)}
      className="group w-full rounded-2xl border border-slate-200 bg-yib-surface p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <Icon className="mb-5 h-10 w-10 text-yib-primary" />

      <h3 className="text-xl font-bold">
        {journey.title}
      </h3>

      <p className="mt-1 text-sm text-yib-muted">
        {journey.subtitle}
      </p>

      <p className="mt-5 leading-7 text-yib-muted">
        {journey.description}
      </p>
    </button>
  );
}