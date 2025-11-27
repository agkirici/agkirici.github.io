// © 2025 Arzu Kirici — All Rights Reserved

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  // Sort projects: featured first, then by title
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.title.localeCompare(b.title);
  });

  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-neutral-50">
            Projects
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            A collection of bioinformatics tools, scientific software, and research applications I've built.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              slug={project.slug}
              featured={project.featured}
              banner={project.banner}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
