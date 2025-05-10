"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white pt-2"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo como imagen */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="EscCode Logo" width="40px" height="40px" />
        </Link>

        {/* Menú desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-text text-gray-800">
          <a href="#services" className="hover:text-limeAccent transition">
            SERVICIOS
          </a>
          <a href="#projects" className="hover:text-limeAccent transition">
            PROYECTOS
          </a>
          <a href="#about" className="hover:text-limeAccent transition">
            SOBRE NOSOTROS
          </a>
          <a href="#testimonials" className="hover:text-limeAccent transition">
            TESTIMONIOS
          </a>
          <a href="#contact" className="hover:text-limeAccent transition">
            CONTACTO
          </a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú mobile animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden px-4 pt-2 pb-4 bg-white shadow-md font-text text-gray-800 text-base"
          >
            <a
              href="#services"
              className="block py-2 hover:text-lime-600"
              onClick={() => setIsOpen(false)}
            >
              SERVICIOS
            </a>
            <a
              href="#projects"
              className="block py-2 hover:text-lime-600"
              onClick={() => setIsOpen(false)}
            >
              PROYECTOS
            </a>
            <a
              href="#about"
              className="block py-2 hover:text-lime-600"
              onClick={() => setIsOpen(false)}
            >
              SOBRE NOSOSTROS
            </a>
            <a
              href="#testimonials"
              className="block py-2 hover:text-lime-600"
              onClick={() => setIsOpen(false)}
            >
              TESTIMONIOS
            </a>
            <a
              href="#contact"
              className="block py-2 hover:text-lime-600"
              onClick={() => setIsOpen(false)}
            >
              CONTACTO
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
