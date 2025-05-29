import type { Link } from '@/types/link'

export interface Project {
  title: string
  description: string
  publicLink?: Link
  codeLink: string
  tags: string[]
}
