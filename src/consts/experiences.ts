import type { Experience } from '@/types/experience'

export const EXPERIENCES: Experience[] = [
  {
    role: 'Technical Consultant',
    description:
      'Implementación de tecnologías SAS en entidades públicas y privadas. Participé en la integración de soluciones basadas en SAS dentro de entornos corporativos, tanto del sector público como privado. Mi labor incluyó la construcción y personalización de funcionalidades de negocio según los requerimientos del cliente, utilizando herramientas como Java, JavaScript y Angular para desarrollar componentes robustos y adaptados a cada caso.',
    company: {
      name: 'SAS',
      website: {
        href: 'https://www.sas.com/',
        title: 'SAS',
      },
    },
    startDate: '2021',
    endDate: '2025',
  },
  {
    role: 'Software Engineer',
    description:
      'Desarrollo de soluciones fintech para el grupo CaixaBank. En este rol participé en el diseño e implementación de interfaces de usuario utilizando tecnologías frontend como React, junto con frameworks propios de la entidad para garantizar la coherencia visual y funcional de la interfaz. Asimismo, colaboré en el desarrollo backend mediante Spring, creando microservicios que daban soporte a las aplicaciones y facilitaban su escalabilidad y mantenimiento.',
    company: {
      name: 'CaixaBank Tech',
      website: {
        href: 'https://caixabanktech.com/',
        title: 'CaixaBank Tech',
      },
    },
    startDate: '2025',
    endDate: 'Actualidad',
  },
]
