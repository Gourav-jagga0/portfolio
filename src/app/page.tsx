import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
// import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <Hero />
          </div>
        </section>
        {/* <section className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <Projects />
          </div>
        </section> */}
        <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <Skills />
          </div>
        </section>
        <section className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
