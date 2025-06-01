import LinkedinIcon from '@/components/ui/icons/LinkedinIcon.astro'
import GithubIcon from '@/components/ui/icons/GithubIcon.astro'
import XIcon from '@/components/ui/icons/XIcon.astro'

export const socials = [
  {
    link: {
      href: 'https://www.linkedin.com/in/juliandepablo/',
    },
    techLogo: {
      logo: LinkedinIcon,
    },
    showArrow: false,
    hover: 'hover:fill-[#0A66C2]',
  },
  {
    link: {
      href: 'https://github.com/juliandpt',
    },
    techLogo: {
      logo: GithubIcon,
    },
    showArrow: false,
    hover: 'hover:fill-white',
  },
  {
    link: {
      href: 'https://x.com/Depabloj',
    },
    techLogo: {
      logo: XIcon,
    },
    showArrow: false,
    hover: 'hover:fill-white',
  },
]
