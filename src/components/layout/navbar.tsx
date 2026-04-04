import { useState } from "react";
import { useScrollPosition } from "../../hooks/use-scroll-position";
import { navItems } from "../../data/navigation-data";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const isScrolled = useScrollPosition(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-secondary shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-white font-bold text-xl tracking-wider">
            IMPERIAL PALACE
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white text-xs uppercase tracking-wider hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
