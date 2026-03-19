import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";
import Footer from "../components/Footer/Footer";

const BASE_URL = "https://angelodelcastillo.com";

function Home() {
  return (
    <>
      <Helmet>
        <title>Angelo Del Castillo | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer with 1+ year of experience building web applications with React, NestJS, Node.js and PostgreSQL. Available for freelance and full-time opportunities." />
        <link rel="canonical" href={BASE_URL} />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:title" content="Angelo Del Castillo | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in React, NestJS, Node.js and PostgreSQL." />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;