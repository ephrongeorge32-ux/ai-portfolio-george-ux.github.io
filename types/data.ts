// types/data.ts

// Interface for the project metrics, used by Nivo charts
export interface ProjectMetric {
  metric: string;
  value: number;
  project: string;
  color: string;
}

// Data structure for the SAP FI Rework Reduction chart (simulated data)
export const quantitativeBarChartData: ProjectMetric[] = [
  { metric: "Initial Rework Rate", value: 65, project: "SAP FI S/4HANA", color: "#F00" },
  { metric: "Target Rework Rate", value: 25, project: "SAP FI S/4HANA", color: "#555" },
  { metric: "Achieved Rework Rate", value: 25, project: "SAP FI S/4HANA", color: "#00FFFF" },
];