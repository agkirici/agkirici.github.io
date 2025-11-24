import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const project = projects[0]; // Only one project for now

  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-50">
            Projects
          </h1>
          <p className="text-neutral-300 text-sm md:text-base">
            A collection of bioinformatics tools and software projects I've worked on.
          </p>
        </header>

        {/* === PROJECT CARD === */}
        <ProjectCard
          title={project.title}
          description={project.description}
          tags={project.tags}
          slug="spatioscript"
          featured={project.featured}
          link={project.link}
          github={project.github}
        />

      </div>
    </main>
  );
}
