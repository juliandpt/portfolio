import type { Project } from '@/types/project'
import AngularIcon from '@/components/ui/icons/AngularIcon.astro'
import AstroIcon from '@/components/ui/icons/AstroIcon.astro'
import BootstrapIcon from '@/components/ui/icons/BootstrapIcon.astro'
import MongodbIcon from '@/components/ui/icons/MongodbIcon.astro'
import NodejsIcon from '@/components/ui/icons/NodejsIcon.astro'
import NuxtIcon from '@/components/ui/icons/NuxtIcon.astro'
import PostgresqlIcon from '@/components/ui/icons/PostgresqlIcon.astro'
import TailwindIcon from '@/components/ui/icons/TailwindIcon.astro'
import VuetifyIcon from '@/components/ui/icons/VuetifyIcon.astro'
import ReactIcon from '@/components/ui/icons/ReactIcon.astro'
import ChakraIcon from '@/components/ui/icons/ChakraIcon.astro'

export const PROJECTS: Project[] = [
  {
    title: 'infopueblo',
    description: '🏘️ Plataforma que promociona el ocio rural en España.',
    image: {
      src: '/images/infopueblo-logo.webp',
      alt: 'Logo de infopueblo',
    },
    codeLink: 'https://github.com/juliandpt/infopueblo',
    tags: [
      {
        name: 'Angular',
        logo: AngularIcon,
      },
      {
        name: 'Bootstrap',
        logo: BootstrapIcon,
      },
      {
        name: 'Node',
        logo: NodejsIcon,
      },
      {
        name: 'PgSQL',
        logo: PostgresqlIcon,
      },
    ],
  },
  {
    title: 'webstats',
    description: '🛡️ Análisis de seguridad de endpoints en sitios web.',
    image: {
      src: '/images/webstats-logo.webp',
      alt: 'Logo de webstats',
    },
    codeLink: 'https://github.com/juliandpt/webstats',
    tags: [
      {
        name: 'Nuxt',
        logo: NuxtIcon,
      },
      {
        name: 'Vuetify',
        logo: VuetifyIcon,
      },

      {
        name: 'Node',
        logo: NodejsIcon,
      },
      {
        name: 'MongoDB',
        logo: MongodbIcon,
      },
    ],
  },
  {
    title: 'facilitea',
    description: '🛍️ Plataforma de e-commerce de CaixaBank',
    image: {
      src: '/images/facilitea-logo.webp',
      alt: 'Logo de facilitea',
    },
    publicLink: {
      title: 'facilitea',
      href: 'https://www.facilitea.com/',
    },
    tags: [
      {
        name: 'React',
        logo: ReactIcon,
      },
      {
        name: 'Chakra UI',
        logo: ChakraIcon,
      },
    ],
  },
  {
    title: 'boda-maria-y-sergio',
    description: '💍 Página de informacion de bodas.',
    publicLink: {
      title: 'boda-maria-y-sergio',
      href: 'https://boda-maria-y-sergio.vercel.app/',
    },
    codeLink: 'https://github.com/juliandpt/boda-maria-y-sergio',
    tags: [
      {
        name: 'Astro',
        logo: AstroIcon,
      },
      {
        name: 'Tailwind CSS',
        logo: TailwindIcon,
      },
    ],
  },
]
