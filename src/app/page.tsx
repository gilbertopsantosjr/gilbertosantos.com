/* eslint-disable @next/next/no-sync-scripts */
import About from "@/components/about";
import Contacts from "@/components/contact";
import Dashboard from "@/components/dashboard";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skiils";
import Testimonial from "@/components/testimonial";
import Video from "@/components/video";
export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Dashboard />
        <About />
        <Skills />
        <Video />
        <Projects />
        <Testimonial />
        <Contacts />
        <Footer />
      </main>
      <a href="#home" className="scrollup" id="scroll-up">
        <i className="fa-solid fa-arrow-up scroll-up-icon"></i>
      </a>
    </>
  );
}
