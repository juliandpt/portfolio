import type { Link } from '@/types/link'
import type { Image } from '@/types/image'
import type { Technology } from '@/types/technology'

export interface Project {
  title: string
  description: string
  image?: Image
  publicLink?: Link
  codeLink: string
  tags: Technology[]
}
