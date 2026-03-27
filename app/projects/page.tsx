import { Metadata } from "next";
import { AllProjectsContent } from "@/components/all-projects-content";

export const metadata: Metadata = {
  title: "All Projects | 3D Portfolio",
  description: "Browse all photorealistic 3D renders and product visualizations.",
};

export default function AllProjectsPage() {
  return <AllProjectsContent />;
}
