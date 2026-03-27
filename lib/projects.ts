export const projects = [
  {
    id: 1,
    slug: "luxury-fragrance",
    title: "Luxury Fragrance",
    category: "Product Visualization",
    description: "Photorealistic perfume bottle renders with dramatic studio lighting and meticulous material work. Every reflection and refraction carefully crafted.",
    heroImage: "/renders/project-1.jpg",
    images: [
      "/renders/project-1.jpg",
      // Add more renders here
    ],
    details: {
      client: "Personal Project",
      year: "2024",
      software: "Blender, Photoshop",
      type: "Product Visualization",
    },
  },
  {
    id: 2,
    slug: "automotive-cgi",
    title: "Automotive CGI",
    category: "Hard Surface",
    description: "High-end automotive visualization capturing every curve, reflection, and material with obsessive attention to detail. Studio-quality CGI that rivals photography.",
    heroImage: "/renders/project-2.jpg",
    images: [
      "/renders/project-2.jpg",
      // Add more renders here
    ],
    details: {
      client: "Personal Project",
      year: "2024",
      software: "Blender, Photoshop",
      type: "Automotive CGI",
    },
  },
  {
    id: 3,
    slug: "industrial-design",
    title: "Industrial Design",
    category: "Technical Viz",
    description: "Precision industrial machinery visualization with brushed steel, carbon fiber, and technical accuracy. Engineering meets art.",
    heroImage: "/renders/project-3.jpg",
    images: [
      "/renders/project-3.jpg",
      // Add more renders here
    ],
    details: {
      client: "Personal Project",
      year: "2024",
      software: "Blender, Plasticity",
      type: "Industrial Design",
    },
  },
  {
    id: 4,
    slug: "architectural-interior",
    title: "Architectural Interior",
    category: "Archviz",
    description: "Modern minimalist interior visualization with dramatic natural lighting, concrete and wood materials. Luxury architectural design brought to life.",
    heroImage: "/renders/project-4.jpg",
    images: [
      "/renders/project-4.jpg",
      // Add more renders here
    ],
    details: {
      client: "Personal Project",
      year: "2024",
      software: "Blender, Photoshop",
      type: "Architectural Visualization",
    },
  },
];

export type Project = typeof projects[0];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
