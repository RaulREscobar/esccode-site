'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white py-5 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <img src="/logo-white.png" width='70px' height='50px' alt='Logo EscCode'/>
        <nav className="flex gap-6 font-agrandirnarrow text-sm">
          <Link href="#hero" className="hover:text-lima transition-colors">Inicio</Link>
          <Link href="#services" className="hover:text-lima transition-colors">Servicios</Link>
          <Link href="#projects" className="hover:text-lima transition-colors">Proyectos</Link>
          <Link href="#about" className="hover:text-lima transition-colors">Nosotros</Link>
          <Link href="#contact" className="hover:text-lima transition-colors">Contacto</Link>
        </nav>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400 font-agrandirnarrow">
        © {new Date().getFullYear()} EscCode. Todos los derechos reservados.
      </div>
    </motion.footer>
  )
}
