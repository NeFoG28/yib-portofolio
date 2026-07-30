import { Check } from "lucide-react";
import { SkillCategory } from "@/data/skills";

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({
  category,
}: SkillCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-bold text-slate-900">
        {category.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {category.description}
      </p>

      <div className="mt-6 space-y-3">
        {category.skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3 text-sm text-slate-700"
          >
            <Check className="h-4 w-4 text-blue-600" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </article>
  );
}