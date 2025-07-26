export interface Project {
  id: number
  title: string
  slug: string
  date: string
  shortDescription: string
  description: string[]
  coverImage: string
  gallery: string[]
  videoUrl?: string
  techStack: string[]
  features: string[]
  githubUrl: string
  liveUrl?: string | null;
  commits?: number;
  insertions?: number;
  deletions?: number;
}
