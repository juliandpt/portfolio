import type { Link } from '@/types/link'
import type { Image } from '@/types/image'
import type { Technology } from '@/types/technology'

export interface Project {
  title: string
  shortDescription: string
  description: string
  features: string[]
  isInProgress?: boolean
  image?: Image
  publicLink?: Link
  codeLink?: string
  tags: Technology[]
}
