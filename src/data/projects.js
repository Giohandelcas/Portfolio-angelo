import mili from "../assets/images/mili.png";
import leypal from "../assets/images/leypalLogo.png";
import portfolio from "../assets/images/portfolioCap.png";
import inventory from "../assets/images/inventoryP.png";

const projects = [
  {
    title: "Mili",
    description: "Mili is the technology that enables financial institutions, credit unions, and businesses to manage their lending operations from start to finish under a white-label model.",
    image: mili,
    tech: ["React", "NestJS"],
    demo: "https://mili.com.co/que-es-mili",
    github: "https://github.com/Giohandelcas",
    type: "professional",
  },

  {
    title: "Leypal",
    description: "Leypal is an advanced electronic signature platform that is fully legally valid in Latin America. Each signature is protected by blockchain technology.",
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
    demo: "https://angelodelcastillo.com",
    github: "https://github.com/Giohandelcas/Portfolio-angelo",
    type: "professional",
  },

  {
    title: "Inventory System",
    description: "A full-stack inventory management system designed for small retail stores. It allows store owners to track stock levels, manage products, and receive low-stock alerts in real time.",
    image: inventory,
    tech: ["React", "Node", "Express", "Vite", "Tailwind", "SQLite", "Claude AI"],
    demo: "#https://giohandelcas.github.io/",
    github: "#https://github.com/Giohandelcas/Inventory-System",
    type: "personal",
  },
];

export default projects;