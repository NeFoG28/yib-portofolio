import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/sections/ProjectHero";
import ProjectSection from "@/components/ui/ProjectSection";
import ProjectTags from "@/components/ui/ProjecTags";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.id === slug
  );

  if (!project) {
    notFound();
  }

  return (
  <main className="min-h-screen bg-slate-50">

    <ProjectHero
      category={project.category}
      title={project.title}
      description={project.description}
      status={project.status}
    />

    <div className="mx-auto max-w-5xl px-6 py-20">

      <div className="mb-20">
        <ProjectTags tags={project.tags} />
      </div>

      <div className="space-y-16">

        {project.context && (
          <ProjectSection
            number="01"
            title="Context"
          >
            <p>{project.context}</p>
          </ProjectSection>
        )}

        {project.challenge && (
          <ProjectSection
            number="02"
            title="Challenge"
          >
            <p>{project.challenge}</p>
          </ProjectSection>
        )}

        {project.approach && (
          <ProjectSection
            number="03"
            title="Approach"
          >
            <p>{project.approach}</p>
          </ProjectSection>
        )}

        {project.implementation && (
          <ProjectSection
            number="04"
            title="Implementation"
          >
            <ul className="space-y-3">
              {project.implementation.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </ProjectSection>
        )}

        {project.result && (
          <ProjectSection
            number="05"
            title="Result"
          >
            <p>{project.result}</p>
          </ProjectSection>
        )}

        {project.learned && (
          <ProjectSection
            number="06"
            title="What I Learned"
          >
            <p>{project.learned}</p>
          </ProjectSection>
        )}

      </div>

    </div>

  </main>
);
}