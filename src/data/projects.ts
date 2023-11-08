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
    link: "https://www.youtube.com/watch?v=Vbj9tO99cqA&list=PLOK8xRHbMJTU4iPETfSj27GI6c6JWq4eg&index=10",
  },
  {
    title: "Sistema web de control administrativo para la Oficina Contable Soloconta",
    techs: ["JavaScript", "Node JS", "PostgreSQL", "Vue JS"],
    link: "https://www.youtube.com/watch?v=6bb5BXIiknE&list=PLOK8xRHbMJTU4iPETfSj27GI6c6JWq4eg&index=4",
  },
  {
    title: "Sistema Web de Ecommerce para la PetShop Invetagro",
    techs: ["MongoDB", "Express", "Angular", "Node JS"],
    link: "https://www.youtube.com/watch?v=hqm2e9lDfco",
  },
  {
    title: "Desarrollo de sistema para administración de datos, de compraventa de textiles “artesanía maya” en San Juan la Laguna.",
    techs: ["SQL Server", ".Net Core 7", "Angular", "Node JS"],
    link: "https://www.youtube.com/watch?v=bewpEmcT3rE",
  },
];

export default projects;
