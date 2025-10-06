export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveDemoLink?: string;
  videoFilename?: string;
  createdAt: string;
}

export interface ProjectFormData {
  id?: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveDemoLink?: string;
  videoFilename?: string;
}
