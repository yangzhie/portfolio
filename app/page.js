import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
