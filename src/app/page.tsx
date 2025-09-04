import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <main className="bg-bg-primary text-text-primary min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
