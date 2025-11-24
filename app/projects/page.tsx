import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-100">
            Projects
          </h1>
          <p className="mt-2 text-neutral-300">
            A collection of bioinformatics tools and software projects I've worked on.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              slug={project.id}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
