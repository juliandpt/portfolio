interface Tech {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  publicLink?: string;
  codeLink: string;
  techs: Tech[];
}
