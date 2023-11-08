export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Sistema web de control administrativo para Cáritas Diócesis de Sololá Chimaltenango",
    techs: ["Python", "PostgreSQL", "Flask", "React"],
    link: "https://youtube.com",
  },
  {
    title: "Firstly",
    techs: ["React Native", "JavaScript"],
    link: "https://codenanshu.in/projects/firstly/",
  },
  {
    title: "Astro / Template",
    techs: ["Astro"],
    link: "/"
  },
];

export default projects;
