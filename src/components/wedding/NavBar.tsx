import { useState, useEffect } from "react";

const navLinks = [
  { href: "#details", label: "Детали" },
  { href: "#story", label: "История" },
  { href: "#gallery", label: "Фото" },
  { href: "#dresscode", label: "Дресс-код" },
  { href: "#rsvp", label: "Присутствие" },
  { href: "#contacts", label: "Контакты" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-script text-2xl text-gold">
          А & А
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-serif-elegant text-sm tracking-widest uppercase text-stone-600 hover:text-amber-500 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-stone-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-stone-600 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-stone-600 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-stone-600 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-100 px-6 py-4 space-y-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block font-serif-elegant text-sm tracking-widest uppercase text-stone-600 hover:text-amber-500 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;