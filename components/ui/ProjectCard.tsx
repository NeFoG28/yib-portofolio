import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const categoryLabels = {
  networking: "Networking",
  qa: "Quality Assurance",
  data: "Data",
  game: "Game Development",
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-blue-600">
          {categoryLabels[project.category]}
        </span>

        <span className="text-xs capitalize text-slate-400">
          {project.status.replace("-", " ")}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-blue-600"
      >
        View Project
        <ArrowUpRight className="h-4 w-4" />
      </Link>

    </article>
  );
}