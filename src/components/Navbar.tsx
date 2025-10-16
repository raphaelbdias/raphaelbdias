"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavLinks = (
    <div className="nav-links">
      <a href="/">Home</a>
      <a href="#projects">Projects</a>
      <a href="#thoughts">Thoughts</a>
      <a href="#reads">Reads</a>
      <a href="#beyondwork">Beyond</a>
      <a href="#contact">Contact</a>
    </div>
  );

  return (
    <nav className={scrolled ? "scrolled" : undefined}>
      <div className="nav-inner container">
        <a href="#top" className="brand" aria-label="Raphael B. Dias home">
          Raphael B. Dias
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {NavLinks}
      </div>

      <div className={`nav-drawer ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <div className="nav-drawer-content" onClick={(e) => e.stopPropagation()}>
          {NavLinks}
        </div>
      </div>
    </nav>
  );
}
