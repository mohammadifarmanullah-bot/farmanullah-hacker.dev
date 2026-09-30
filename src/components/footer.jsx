const footer = () => {
    return (
      <footer className="border-t border-[#00ff88]/10 bg-[#050807] text-white">
  
        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
  
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
  
            {/* Brand */}
            <div className="lg:col-span-2">
  
              {/* Logo */}
              <a href="/" className="inline-flex items-center gap-3">
                <div className="grid grid-cols-2 gap-0.5">
                  <span className="h-2 w-2 bg-[#00ff88]"></span>
                  <span className="h-2 w-2 bg-[#00ff88]"></span>
                  <span className="h-2 w-2 bg-[#00ff88]"></span>
                  <span className="h-2 w-2 bg-[#00ff88]"></span>
                </div>
  
                <span className="text-2xl font-semibold tracking-tight">
                  haver<span className="text-[#00ff88]">.dev</span>
                </span>
              </a>
  
              <p className="mt-6 max-w-md leading-7 text-gray-400">
                We build modern digital products, powerful web
                applications, and secure technology solutions
                for businesses and organizations.
              </p>
  
              {/* Terminal-style text */}
              <div className="mt-8 font-mono text-sm">
                <span className="text-[#00ff88]">$</span>{" "}
                <span className="text-gray-400">
                  build_the_future();
                </span>
              </div>
  
            </div>
  
  
            {/* Company */}
            <div>
              <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-[#00ff88]">
                Company
              </h3>
  
              <ul className="space-y-4">
  
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 transition hover:text-white"
                  >
                    Home
                  </a>
                </li>
  
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 transition hover:text-white"
                  >
                    About
                  </a>
                </li>
  
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 transition hover:text-white"
                  >
                    Services
                  </a>
                </li>
  
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 transition hover:text-white"
                  >
                    Projects
                  </a>
                </li>
  
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 transition hover:text-white"
                  >
                    Contact
                  </a>
                </li>
  
              </ul>
            </div>
  
  
            {/* Services */}
            <div>
              <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-[#00ff88]">
                Services
              </h3>
  
              <ul className="space-y-4">
  
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 transition hover:text-[#00ff88]"
                  >
                    Web Development
                  </a>
                </li>
  
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 transition hover:text-[#00ff88]"
                  >
                    Mobile Development
                  </a>
                </li>
  
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 transition hover:text-[#00ff88]"
                  >
                    UI/UX Design
                  </a>
                </li>
  
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 transition hover:text-[#00ff88]"
                  >
                    Backend & APIs
                  </a>
                </li>
  
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 transition hover:text-[#00ff88]"
                  >
                    Cybersecurity
                  </a>
                </li>
  
              </ul>
            </div>
  
          </div>
  
  
          {/* CTA */}
          <div className="mt-16 rounded-3xl border border-[#00ff88]/10 bg-[#0a0f0c] p-8 md:flex md:items-center md:justify-between md:p-10">
  
            <div>
              <p className="font-mono text-sm text-[#00ff88]">
                // have a project?
              </p>
  
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                Let's build something great.
              </h3>
            </div>
  
            <a
              href="#contact"
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#00ff88]
                px-7
                py-3.5
                font-semibold
                text-black
                transition
                hover:bg-[#00e67a]
                hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]
                md:mt-0
              "
            >
              Start a project
              <span>→</span>
            </a>
  
          </div>
  
        </div>
  
  
        {/* Bottom Bar */}
        <div className="border-t border-white/5">
  
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between lg:px-10">
  
            <p>
              © {new Date().getFullYear()} Haver.dev. All rights reserved.
            </p>
  
            <div className="flex items-center gap-6">
  
              <a
                href="#"
                className="transition hover:text-white"
              >
                Privacy
              </a>
  
              <a
                href="#"
                className="transition hover:text-white"
              >
                Terms
              </a>
  
              <a
                href="#"
                className="transition hover:text-[#00ff88]"
              >
                GitHub
              </a>
  
            </div>
  
          </div>
  
        </div>
  
      </footer>
    );
  };
  
  export default footer;