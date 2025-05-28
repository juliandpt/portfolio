export interface Project {
  title: string
  description: string
  publicLink?: {
    title: string
    href: string
    class?: string
  }
  codeLink: string
  tags: string[]
}
