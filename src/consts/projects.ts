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
import ShadcnIcon from '@/components/ui/icons/ShadcnIcon.astro'
import PythonIcon from '@/components/ui/icons/PythonIcon.astro'

export const PROJECTS: Project[] = [
  {
    title: 'Infopueblo',
    shortDescription: 'Plataforma que promociona el ocio rural en España.',
    description:
      'Plataforma creada para la promoción del ocio rural en España, ofreciendo a los usuarios la posibilidad de descubrir y reservar actividades en entornos rurales. La misión de este proyecto es fomentar el turismo de los pueblos catalogados como la España vaciada, contribuyendo así a la revitalización de estas áreas y al apoyo de las comunidades locales.',
    features: [
      'Buscador de los pueblos',
      'Modelo de IA para determinar si un pueblo pertenece a la España vaciada',
      'Web Scrapping para obtener información del ocio en pueblos',
      'Mapa interactivo con la ubicación de los pueblos',
      'Login de usuarios y sistema de guardar pueblos favoritos',
    ],
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
        name: 'Node.js',
        logo: NodejsIcon,
      },
      {
        name: 'Python',
        logo: PythonIcon,
      },
      {
        name: 'PostgreSQL',
        logo: PostgresqlIcon,
      },
    ],
  },
  {
    title: 'Webstats',
    shortDescription: 'Análisis de seguridad de endpoints en sitios web.',
    description:
      'Herramienta de análisis de seguridad de endpoints en sitios web, diseñada para ayudar a los desarrolladores y administradores de sitios web a identificar y abordar vulnerabilidades en sus aplicaciones. Ofrece una variedad de información que permite a los usuarios realizar análisis exhaustivos de seguridad, generar reportes detallados y monitorear sus sitios web para garantizar la protección contra amenazas y ataques.',
    features: ['Análisis de vulnerabilidades', 'Reportes de seguridad', 'Monitoreo en tiempo real'],
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
        name: 'Node.js',
        logo: NodejsIcon,
      },
      {
        name: 'MongoDB',
        logo: MongodbIcon,
      },
    ],
  },
  {
    title: 'Facilitea',
    shortDescription: 'Plataforma de e-commerce de CaixaBank',
    description:
      'Plataforma de e-commerce desarrollada para CaixaBank, diseñada para ofrecer a los clientes una experiencia de compra en línea fácil y segura. La plataforma permite a los usuarios explorar un catálogo de productos, agregar artículos a su carrito de compras y realizar pagos de manera eficiente, todo respaldado por la seguridad y confiabilidad que caracteriza a CaixaBank.',
    features: [
      'Catálogo de productos',
      'Carrito de compras',
      'Integración con pasarelas de pago',
      'Variedad de métodos de pago',
    ],
    image: {
      src: '/images/facilitea-logo.webp',
      alt: 'Logo de facilitea',
    },
    publicLink: {
      title: 'Facilitea',
      href: 'https://www.facilitea.com/',
      aria_label: 'Navegar a la página de facilitea',
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
    title: 'Boda María y Sergio',
    shortDescription: 'Página de informacion de bodas.',
    description:
      'Landing page creada para la boda de María y Sergio, con el objetivo de proporcionar a los invitados toda la información necesaria sobre el evento, incluyendo detalles sobre la ceremonia, la recepción y datos relevantes al evento.',
    features: [
      'Enlaces a información del evento',
      'Galería de fotos',
      'Contador en tiempo real para el día de la boda',
    ],
    image: {
      src: '/images/boda-maria-y-sergio-logo.webp',
      alt: 'Logo de boda-maria-y-sergio',
    },
    publicLink: {
      title: 'Boda María y Sergio',
      href: 'https://boda-maria-y-sergio.vercel.app/',
      aria_label: 'Navegar a la página de la boda de María y Sergio',
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
  {
    title: 'Caixabank Now',
    shortDescription: 'App de banca digital de Caixabank',
    description:
      'Aplicación de banca digital desarrollada para CaixaBank, diseñada para ofrecer a los clientes una experiencia bancaria en línea fácil y segura. La aplicación permite a los usuarios gestionar sus cuentas, realizar transferencias, pagar facturas y acceder a una variedad de servicios financieros, todo respaldado por la seguridad y confiabilidad que caracteriza a CaixaBank.',
    features: ['Migración de arquitectura', 'Servicio de desbloqueo de tarjetea mediante PIN.'],
    isInProgress: true,
    image: {
      src: '/images/now-logo.webp',
      alt: 'Logo de now',
    },
    tags: [
      {
        name: 'React',
        logo: ReactIcon,
      },
    ],
  },
  {
    title: 'Scaffoldio',
    shortDescription: 'Generador dinámico de scaffolds para proyectos de software',
    description:
      'Generador dinámico de scaffolds para la documentación de proyectos de software. Esta herramienta permite a los desarrolladores modificar en tiempo real la estructura de carpetas de su propio proyecto, facilitando la organización y gestión de archivos. Scaffoldio es especialmente útil para proyectos que requieren una estructura de carpetas flexible y adaptable a medida que evolucionan, proporcionando una solución eficiente para mantener la documentación actualizada y bien organizada.',
    features: [
      'Entrada de estructura de carpetas personalizada en formato json',
      'Generación dinámica en tiempo real del scaffold',
    ],
    isInProgress: true,
    image: {
      src: '/images/scaffoldio-logo.webp',
      alt: 'Logo de scaffoldio',
    },
    tags: [
      {
        name: 'React',
        logo: ReactIcon,
      },
      {
        name: 'Shadcn/ui',
        logo: ShadcnIcon,
      },
    ],
  },
]
