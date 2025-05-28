import type { Project } from '@/types/project'

export const PROJECTS: Project[] = [
  {
    title: 'infopueblo',
    description:
      'Plataforma digital que da visibilidad al ocio de pueblos en zonas rurales de España.',
    codeLink: 'https://github.com/juliandpt/infopueblo',
    tags: ['Angular.js', 'Bootstrap', 'Node.js', 'PostgreSQL', 'Python'],
  },
  {
    title: 'webstats',
    description: 'Herramienta web que analiza la seguridad de los endpoints de cualquier sitio.',
    codeLink: 'https://github.com/juliandpt/webstats',
    tags: ['Nuxt.js', 'Vuetify', 'Node.js', 'MongoDB'],
  },
  {
    publicLink: {
      title: 'boda-maria-y-sergio',
      href: 'https://bodonmaldochon.es/',
      class:
        'font-medium decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline',
    },
    title: 'boda-maria-y-sergio',
    description:
      'Landing page para la visualziación de la información relacionada con la boda de María y Sergio.',
    codeLink: 'https://github.com/juliandpt/boda-maria-y-sergio',
    tags: ['Astro', 'TailwindCSS'],
  },
]
