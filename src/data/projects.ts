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
  {
    title: "Sistema Web para la automatización y control de procesos de Café Misión San Lucas Tolimán, S. A.",
    techs: ["TypeScript", "Angular", "MySQL", "Node JS"],
    link: "https://youtu.be/oGwdRcRpzp4?si=QwvWKdbiGDokEOA8",
  },
  {
    title: "Sistema web para la Gestión Contable Taxes GT",
    techs: ["Python", "Flask", "PostgreSQL", "Boostrap"],
    link: "https://youtu.be/fHWABkvDiqs",
  },
  {
    title: "Diseño y desarrollo de sistema web para el control de la Granja Santa Sofía",
    techs: ["Express", "Node JS", "Bootstrap", "MySQL", "Angular"],
    link: "https://youtu.be/D4p96LKXY54",
  },
  {
    title: "Sistema web de Compras, Inventario y Ventas MG Comerciales",
    techs: ["PostgreSQL", "Express", "React", "Node JS"],
    link: "https://youtu.be/pbIWVaygSDs",
  },
  {
    title: "Sistema web para la Clinica Dental Ixmukane",
    techs: ["Node JS", "Express", "PostgreSLQ", "React"],
    link: "https://www.youtube.com/watch?v=3Rv9wgRmJSs&t=23s",
  },
  {
    title: "Sistema web de control de inventario, pdorduccion y toma de pedidos",
    techs: ["Angular", "TypeScript", "Node JS", "Express", "PostgreSQL"],
    link: "https://youtu.be/zp86doiFOqg?si=SHMWluNpQOD7oAu1",
  },
  {
    title: "Sistema web para control de registro de pacientes de la clínica oftalmológica OPTICA 20/20",
    techs: ["React", "Bootstrap", "Node JS", "Express"],
    link: "https://youtu.be/4BBTPQTr_0g",
  },
  {
    title: "Sistema web de gestión de fichas de calificaciones para la Asociación Quchooch, Santiago Atitlán, Sololá",
    techs: ["ASP .NET Core 7", "Entity Framework", "SQL Server", "Vue JS"],
    link: "https://www.youtube.com/watch?v=TpElA9gvDY8",
  },
];

export default projects;
