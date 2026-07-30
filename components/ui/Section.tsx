interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl px-6 py-32"
    >
      {(title || subtitle) && (
        <div className="mb-16 text-center">

          {subtitle && (
            <p className="font-semibold text-blue-600">
              {subtitle}
            </p>
          )}

          {title && (
            <h2 className="mt-4 text-4xl font-bold">
              {title}
            </h2>
          )}

        </div>
      )}

      {children}

    </section>
  );
}