import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import CodePhilosophy from '@/components/CodePhilosophy';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodePhilosophy />
      <Contact />
    </div>
  );
}
