import Section from "@/components/ui/Section";
import SkillCard from "@/components/ui/SkillCard";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      subtitle="What I Work With"
      title="Skills & Capabilities"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </Section>
  );
}