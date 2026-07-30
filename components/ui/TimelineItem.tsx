import { Circle } from "lucide-react";

interface TimelineItemProps {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export default function TimelineItem({
  period,
  role,
  organization,
  description,
}: TimelineItemProps) {
  return (
    <article className="relative grid gap-6 md:grid-cols-[120px_1fr]">
      <div className="text-sm font-medium text-slate-500">
        {period}
      </div>

      <div className="relative border-l border-slate-200 pl-8 pb-12">
        <Circle
          className="absolute -left-[7px] top-0 h-3 w-3 fill-white text-blue-600"
          strokeWidth={2}
        />

        <h3 className="text-xl font-bold text-slate-900">
          {role}
        </h3>

        <p className="mt-1 font-medium text-blue-600">
          {organization}
        </p>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}