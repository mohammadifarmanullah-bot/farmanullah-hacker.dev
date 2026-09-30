import { useState } from "react";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-6 pt-6">
      <div
        className="
          mx-auto
    flex
    h-20
    max-w-350
    items-center
    justify-between
    rounded-full
    border
    border-white/30
    bg-black/20
    px-8
    backdrop-blur-sm
        "
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5">
            <span className="h-2 w-2 bg-[#00ff88]"></span>
            <span className="h-2 w-2 bg-[#00ff88]"></span>
            <span className="h-2 w-2 bg-[#00ff88]"></span>
            <span className="h-2 w-2 bg-[#00ff88]"></span>
          </div>

          <span className="text-2xl font-medium text-white">
            hacker.dev
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="text-white/90 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-white/90 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#services"
            className="text-white/90 transition hover:text-white"
          >
            Services
          </a>

          <a
            href="#blog"
            className="text-white/90 transition hover:text-white"
          >
            Blog
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="
              rounded-full
              border
              border-white/60
              px-7
              py-3
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-7 bg-white"></span>
          <span className="h-0.5 w-7 bg-white"></span>
          <span className="h-0.5 w-7 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/20 bg-black/80 p-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-5">

            <a href="#home" className="text-white">
              Home
            </a>

            <a href="#about" className="text-white">
              About
            </a>

            <a href="#services" className="text-white">
              Services
            </a>

            <a href="#blog" className="text-white">
              Blog
            </a>

            <a
              href="#contact"
              className="w-fit rounded-full border border-white/50 px-6 py-3 text-white"
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default navbar;