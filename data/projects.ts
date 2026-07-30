export interface Project {
  id: string;
  title: string;
  category: "networking" | "qa" | "data" | "game";
  description: string;
  tags: string[];
  status: "completed" | "in-progress" | "concept";
  featured?: boolean;

context?: string;
  challenge?: string;
  approach?: string;
  implementation?: string[];
  result?: string;
  learned?: string;
  
media?: {
  type: "image" | "diagram";
  src: string;
  alt: string;
  caption?: string;
}[];

links?: {
  label: string;
  url: string;
}[];

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

  context:
    "A network design and configuration study focused on broadband access using FTTH and GPON technology.",

  challenge:
    "Designing an access topology that could support customer connectivity while maintaining structured VLAN, service-port, and bandwidth configuration.",

  approach:
    "The network was approached from the OLT through the passive optical distribution layer to customer ONU/ONT devices, with attention to service segmentation and operational management.",

  implementation: [
    "FTTH access topology",
    "GPON OLT configuration",
    "VLAN segmentation",
    "Service-port mapping",
    "Bandwidth profile configuration",
    "ONU/ONT management",
  ],

  result:
    "A structured FTTH/GPON access design that demonstrates how broadband customer connectivity can be organized and managed.",

  learned:
    "The project strengthened understanding of GPON architecture, service mapping, bandwidth management, and practical network troubleshooting.",
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