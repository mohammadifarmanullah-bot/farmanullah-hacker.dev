import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* Hero */}
        <section
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.jpeg')",
          }}
        >
          {/* Overlay ONLY on the hero image */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Navbar */}
          <Navbar />

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-screen items-center justify-center text-center text-white">
            <div>
              <h1 className="text-6xl font-bold">
                Welcom To <span className="text-[#00ff88]">Hacker.dev</span>
              </h1>

              <p className="mt-5 text-xl">No one can save form hacker.</p>
            </div>
          </div>
        </section>
      </div>
      {/* Services */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#050807] py-24 text-white lg:py-32"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-[#00ff88]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#00ff88]"></span>

              <span className="font-mono text-sm uppercase tracking-[0.25em] text-[#00ff88]">
                // our services
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              We build
              <span className="text-[#00ff88]"> digital solutions.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              From high-performance websites to secure applications, we build
              modern digital products using powerful technologies and clean
              engineering.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Web Development */}
            <div className="group rounded-2xl border border-[#00ff88]/10 bg-[#0a0f0c] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 hover:bg-[#0c140f] hover:shadow-[0_0_40px_rgba(0,255,136,0.08)]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5">
                <span className="font-mono text-xl text-[#00ff88]">
                  &lt;/&gt;
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Web Development
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Fast, responsive, and scalable websites built with modern
                frameworks and clean, maintainable code.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-[#00ff88] transition-all group-hover:gap-3"
              >
                view_service()
                <span>→</span>
              </a>
            </div>

            {/* Mobile */}
            <div className="group rounded-2xl border border-[#00ff88]/10 bg-[#0a0f0c] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 hover:bg-[#0c140f] hover:shadow-[0_0_40px_rgba(0,255,136,0.08)]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5">
                <span className="font-mono text-xl text-[#00ff88]">[ ]</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Mobile Development
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Modern mobile applications designed for performance, usability,
                and a seamless experience across devices.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-[#00ff88] transition-all group-hover:gap-3"
              >
                view_service()
                <span>→</span>
              </a>
            </div>

            {/* UI UX */}
            <div className="group rounded-2xl border border-[#00ff88]/10 bg-[#0a0f0c] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 hover:bg-[#0c140f] hover:shadow-[0_0_40px_rgba(0,255,136,0.08)]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5">
                <span className="font-mono text-xl text-[#00ff88]">UI</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                UI/UX Design
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Clean interfaces and thoughtful user experiences designed around
                your users and business goals.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-[#00ff88] transition-all group-hover:gap-3"
              >
                view_service()
                <span>→</span>
              </a>
            </div>

            {/* Backend */}
            <div className="group rounded-2xl border border-[#00ff88]/10 bg-[#0a0f0c] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 hover:bg-[#0c140f] hover:shadow-[0_0_40px_rgba(0,255,136,0.08)]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5">
                <span className="font-mono text-xl text-[#00ff88]">DB</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Backend & APIs
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Secure backend systems, databases, and APIs designed for
                reliability, scalability, and performance.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-[#00ff88] transition-all group-hover:gap-3"
              >
                view_service()
                <span>→</span>
              </a>
            </div>

            {/* Cloud */}
            <div className="group rounded-2xl border border-[#00ff88]/10 bg-[#0a0f0c] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 hover:bg-[#0c140f] hover:shadow-[0_0_40px_rgba(0,255,136,0.08)]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5">
                <span className="font-mono text-xl text-[#00ff88]">~/_</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Cloud & DevOps
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Deploy, automate, monitor, and maintain reliable applications
                using modern infrastructure.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-[#00ff88] transition-all group-hover:gap-3"
              >
                view_service()
                <span>→</span>
              </a>
            </div>

            {/* Cybersecurity */}
            <div className="group rounded-2xl border border-[#00ff88]/10 bg-[#0a0f0c] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 hover:bg-[#0c140f] hover:shadow-[0_0_40px_rgba(0,255,136,0.08)]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5">
                <span className="font-mono text-xl text-[#00ff88]">01</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Cybersecurity
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Security-focused solutions designed to help protect
                applications, systems, and digital infrastructure.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-[#00ff88] transition-all group-hover:gap-3"
              >
                view_service()
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
