import Image from "next/image";

interface ProjectMediaProps {
  media: {
    type: "image" | "diagram";
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export default function ProjectMedia({
  media,
}: ProjectMediaProps) {
  if (!media.length) return null;

  return (
    <section className="space-y-8">
      {media.map((item, index) => (
        <figure key={`${item.src}-${index}`}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={item.src}
              alt={item.alt}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

          {item.caption && (
            <figcaption className="mt-3 text-sm leading-6 text-slate-500">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </section>
  );
}