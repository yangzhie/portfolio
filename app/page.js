import About from "@/components/about/About";
import ImageSlider from "@/components/about/ImageSlider";
import PhotoShow from "@/components/about/PhotoShow";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Sidebar from "@/components/sidebar/Sidebar";
import Slideshow from "@/components/slideshow/Slideshow";

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
