interface ProjectSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export default function ProjectSection({
  number,
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="grid gap-6 border-b border-slate-200 pb-16 md:grid-cols-[120px_1fr]">

      <div className="text-sm font-semibold text-blue-600">
        {number}
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          {title}
        </h2>

        <div className="mt-6 text-base leading-8 text-slate-600">
          {children}
        </div>
      </div>

    </section>
  );
}