interface ProjectTagsProps {
  tags: string[];
}

export default function ProjectTags({
  tags,
}: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}