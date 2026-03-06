import LinkedinIcon from '@/components/ui/icons/LinkedinIcon.astro'
import GithubIcon from '@/components/ui/icons/GithubIcon.astro'
import GmailIcon from '@/components/ui/icons/GmailIcon.astro'

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
  },
  {
    link: {
      href: 'mailto:juliandpt98@gmail.com',
      aria_label: 'Enviar correo electrónico a Julian De Pablo',
    },
    techLogo: {
      logo: GmailIcon,
    },
    showArrow: false,
  },
]
