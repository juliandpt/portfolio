import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    title: "Infopueblo",
    description:
      "Webapp de búsqueda de municipios españoles. Ofrece datos de ocio de los diferentes municipios, recopilando la información mediante web scrapping, y determinando si este pertenece a la España vaciada.",
    codeLink: "https://github.com/juliandpt/infopueblo",
    techs: [
      {
        name: "Angular.js",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Node.js",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "Python",
      },
    ],
  },
  {
    title: "Webstats",
    description:
      "Servicio web encargado de analizar la seguridad implementada en los diferentes endpoints de cualquier dominio web.",
    codeLink: "https://github.com/juliandpt/webstats",
    techs: [
      {
        name: "Nuxt.js",
      },
      {
        name: "Vuetify",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
    ],
  },
  {
    title: "Boda María y Sergio",
    description:
      "Landing page para la visualziación de la información relacionada con la boda de María y Sergio.",
    codeLink: "https://github.com/juliandpt/boda-maria-y-sergio",
    publicLink: "https://bodonmaldochon.es/",
    techs: [
      {
        name: "Astro",
      },
      {
        name: "TailwindCSS",
      },
    ],
  },
];
