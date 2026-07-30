import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      subtitle="Selected Work"
      title="Projects"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
      </div>
    </Section>
  );
}