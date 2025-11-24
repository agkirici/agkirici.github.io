export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'spatial-omics-viewer',
    title: 'Spatial-Omics Data Viewer',
    description: 'Interactive web application for visualizing spatial transcriptomics and proteomics data with real-time filtering and annotation capabilities.',
    longDescription: 'A full-stack application built with Next.js and a Python FastAPI backend that enables researchers to explore spatial-omics datasets. Features include interactive heatmaps, gene expression overlays, and region-of-interest selection. The frontend uses React and D3.js for visualization, while the backend processes large-scale H5AD files and serves processed data via RESTful APIs.',
    tags: ['Next.js', 'Python', 'FastAPI', 'Spatial Omics', 'Data Visualization'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'D3.js', 'H5AD', 'Docker'],
    githubUrl: 'https://github.com/example/spatial-omics-viewer',
    featured: true,
  },
  {
    id: 'ngs-qc-pipeline',
    title: 'Automated NGS QC Pipeline',
    description: 'End-to-end quality control pipeline for next-generation sequencing data with automated report generation and multi-sample comparison.',
    longDescription: 'A Python-based pipeline that automates quality control workflows for NGS data. It integrates FastQC, Trimmomatic, and custom QC metrics to generate comprehensive MultiQC reports. The pipeline supports batch processing, parallel execution, and cloud deployment. Includes automated detection of sequencing artifacts and quality degradation patterns.',
    tags: ['Python', 'NGS', 'Bioinformatics', 'Automation', 'QC'],
    technologies: ['Python', 'FastQC', 'Trimmomatic', 'MultiQC', 'Snakemake', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/example/ngs-qc-pipeline',
    featured: true,
  },
  {
    id: 'single-cell-toolkit',
    title: 'Single-Cell Analysis Toolkit',
    description: 'Comprehensive toolkit for single-cell RNA-seq analysis using Scanpy and scVI-tools with interactive visualization and batch correction.',
    longDescription: 'A modular Python package that streamlines single-cell RNA-seq analysis workflows. Integrates Scanpy for preprocessing and scVI-tools for deep learning-based analysis. Features include automated cell type annotation, trajectory inference, and differential expression analysis. The toolkit provides Jupyter notebook templates and command-line interfaces for both interactive and batch processing scenarios.',
    tags: ['Python', 'Single-Cell', 'Scanpy', 'scVI', 'Machine Learning'],
    technologies: ['Python', 'Scanpy', 'scVI-tools', 'PyTorch', 'Jupyter', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/example/single-cell-toolkit',
    featured: true,
  },
  {
    id: 'genome-annotator',
    title: 'Genome Annotation Helper',
    description: 'Small utility tool for batch annotation of genomic variants using Ensembl and dbSNP APIs with caching and rate limiting.',
    longDescription: 'A lightweight Python script that helps researchers annotate genomic variants in bulk. It queries Ensembl VEP and dbSNP APIs with intelligent caching to minimize API calls. Includes progress tracking, error handling, and export to VCF or CSV formats. Designed for small to medium-scale variant annotation tasks.',
    tags: ['Python', 'Genomics', 'API', 'Utilities'],
    technologies: ['Python', 'Requests', 'Pandas', 'Ensembl API', 'dbSNP API'],
    githubUrl: 'https://github.com/example/genome-annotator',
    featured: false,
  },
];

export function getProjectsByTag(tag?: string): Project[] {
  if (!tag) return projects;
  return projects.filter((project) => project.tags.includes(tag));
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

