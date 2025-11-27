// © 2025 Arzu Kirici — All Rights Reserved

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="space-y-2 mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-50">
            Projects
          </h1>
          <p className="text-neutral-300 text-sm md:text-base">
            A collection of bioinformatics tools and software projects I've worked on.
          </p>
        </header>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-8 text-center">
            <p className="text-neutral-400">No projects yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                slug={project.slug || `project-${index}`}
                featured={project.featured}
                banner={project.banner}
                link={project.link}
                github={project.github}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
