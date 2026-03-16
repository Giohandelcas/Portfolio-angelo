import mili from "../assets/images/mili.png";
import leypal from "../assets/images/leypalLogo.png";
import portfolio from "../assets/images/portfolioCap.png";

const projects = [
  {
    title: "Mili",
    description: "Mili es la tecnología que permite a entidades financieras, cooperativas y empresas gestionar su operación de crédito de principio a fin, bajo un modelo de marca blanca.",
    image: mili,
    tech: ["React", "NestJS"],
    demo: "https://mili.com.co/que-es-mili",
    github: "https://github.com/Giohandelcas",
    type: "professional",
  },

  {
    title: "Leypal",
    description: "Leypal es una plataforma de firma electrónica avanzada con total validez legal en Latinoamérica. Cada firma está protegida con tecnología blockchain.",
    image: leypal,
    tech: [],
    demo: "https://app.leypalco.com/login",
    github: "https://github.com/Giohandelcas",
    type: "professional",
  },

  {
    title: "Portfolio",
    description: "Personal portfolio website to showcase my work and skills.",
    image: portfolio,
    tech: ["React", "SCSS"],
    demo: "https://porfolio-angelodev.vercel.app",
    github: "https://github.com/Giohandelcas/Portfolio-angelo",
    type: "professional",
  },

  {
    title: "Task Manager Pro",
    description: "Task management app with authentication.",
    image: "/projects/taskmanager.png",
    tech: ["React", "Node", "JWT"],
    demo: "#",
    github: "#",
    type: "personal",
  },

  {
    title: "Inventory System",
    description: "Inventory management for small stores.",
    image: "/projects/inventory.png",
    tech: ["React", "Express"],
    demo: "#",
    github: "#",
    type: "personal",
  },

  {
    title: "Ecommerce REST API",
    description: "REST API for ecommerce platforms.",
    image: "/projects/api.png",
    tech: ["Node", "Express", "PostgreSQL"],
    demo: "#",
    github: "#",
    type: "personal",
  },
];

export default projects;