export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  type: "work" | "project" | "learning";
}

export const experiences: ExperienceItem[] = [
  {
    id: "experience-01",
    period: "Current",
    role: "Network Operation Center",
    organization: "PT Transdata Sejahtera",
    description:
      "Supporting network operations, monitoring infrastructure, troubleshooting connectivity issues, and working with FTTH/GPON-based network environments.",
    type: "work",
  },
];