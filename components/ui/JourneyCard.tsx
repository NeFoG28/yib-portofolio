import {
  Network,
  ShieldCheck,
  ChartColumn,
  Gamepad2,
} from "lucide-react";

import { Journey } from "@/types/journey";

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

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <Icon className="mb-5 h-10 w-10 text-blue-600" />

      <h3 className="text-xl font-bold">
        {journey.title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {journey.subtitle}
      </p>

      <p className="mt-5 text-slate-600 leading-7">
        {journey.description}
      </p>

    </div>
  );
}