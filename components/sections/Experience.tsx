import Section from "@/components/ui/Section";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      subtitle="The Journey So Far"
      title="Experience"
    >
      <div className="mx-auto max-w-4xl">
        {experiences.map((experience) => (
          <TimelineItem
            key={experience.id}
            period={experience.period}
            role={experience.role}
            organization={experience.organization}
            description={experience.description}
          />
        ))}
      </div>
    </Section>
  );
}