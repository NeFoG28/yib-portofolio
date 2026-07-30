import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectHeroProps {
  category: string;
  title: string;
  description: string;
  status: string;
}

export default function ProjectHero({
  category,
  title,
  description,
  status,
}: ProjectHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mt-12">
          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
              {category}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium capitalize text-slate-500">
              {status.replace("-", " ")}
            </span>

          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

      </div>
    </section>
  );
}