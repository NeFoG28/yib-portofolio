export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "networking",
    title: "Networking",
    description:
      "Working with network infrastructure, monitoring, and troubleshooting in operational environments.",
    skills: [
      "FTTH / GPON",
      "MikroTik",
      "OLT / ONU",
      "Network Monitoring",
      "Troubleshooting",
      "VLAN",
    ],
  },

  {
    id: "qa",
    title: "Quality Assurance",
    description:
      "Understanding software testing processes and documenting issues systematically.",
    skills: [
      "Manual Testing",
      "Test Case",
      "Bug Reporting",
      "Severity & Priority",
      "SDLC / STLC",
      "Functional Testing",
    ],
  },

  {
    id: "data",
    title: "Data",
    description:
      "Working with structured information through processing, validation, and documentation.",
    skills: [
      "Data Entry",
      "Data Processing",
      "Spreadsheet",
      "Data Validation",
      "Documentation",
    ],
  },

  {
    id: "game",
    title: "Game Development",
    description:
      "Exploring game creation through programming, design, documentation, and visual assets.",
    skills: [
      "Godot",
      "2D Game Development",
      "Pixel Art",
      "Game Design",
      "Game Documentation",
      "Asset Creation",
    ],
  },
];