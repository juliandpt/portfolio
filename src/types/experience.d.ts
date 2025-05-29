import Image from '@/types/image'
import Link from '@/types/link'

export interface Experience {
  role: string
  description: string
  company: {
    name: string
    website?: Link
  }
  startDate: string
  endDate: string
}
