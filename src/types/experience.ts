export interface Experience {
  role: string
  description: string
  company: {
    name: string
    website?: {
      href: string
      title: string
      class?: string
    }
    image?: {
      src: string
      alt: string
    }
  }
  startDate: string
  endDate: string
}
