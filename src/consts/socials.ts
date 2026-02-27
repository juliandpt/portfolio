import LinkedinIcon from '@/components/ui/icons/LinkedinIcon.astro'
import GithubIcon from '@/components/ui/icons/GithubIcon.astro'
import XIcon from '@/components/ui/icons/XIcon.astro'

export const socials = [
  {
    link: {
      href: 'https://www.linkedin.com/in/juliandepablo/',
      aria_label: 'Navegar al perfil de LinkedIn de Julian De Pablo',
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
      aria_label: 'Navegar al perfil de GitHub de Julian De Pablo',
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
      aria_label: 'Navegar al perfil de X de Julian De Pablo',
    },
    techLogo: {
      logo: XIcon,
    },
    showArrow: false,
    hover: 'hover:fill-white',
  },
]
