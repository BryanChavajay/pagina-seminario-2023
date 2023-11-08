type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "bchavc19@gmail.com",
  title: "Universidad Mariano Galvez de Guatemala, Sololá - Seminario 2023",
  description:
    "Bienvenido 👋, en esta página encontrarás los *proyectos* de los alumnos de *seminario 2023*",
  socials: [
    {
      label: "YouTube",
      link: "https://youtube.com/playlist?list=PLOK8xRHbMJTU4iPETfSj27GI6c6JWq4eg&si=4s6BtXsX-LZPQh4X",
    },
    {
      label: "Faceboook",
      link: "https://facebook.com",
    },
  ],
};

export default presentation;
