export interface Project {
  id: string;
  title: string;
  category: "networking" | "qa" | "data" | "game";
  description: string;
  tags: string[];
  status: "completed" | "in-progress" | "concept";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ftth-gpon",
    title: "FTTH / GPON Network Design",
    category: "networking",
    description:
      "Design and configuration study of an FTTH broadband access network using GPON technology.",
    tags: [
      "FTTH",
      "GPON",
      "OLT",
      "VLAN",
    ],
    status: "completed",
    featured: true,
  },

  {
    id: "yib-portfolio",
    title: "YIB Portfolio",
    category: "game",
    description:
      "A personal portfolio experience designed to document different professional journeys and contributions.",
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "Vercel",
    ],
    status: "in-progress",
    featured: true,
  },
];