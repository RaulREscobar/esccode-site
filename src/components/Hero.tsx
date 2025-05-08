'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-black text-white py-32 px-4 md:px-8 flex flex-col items-center text-center"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-title mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Creamos soluciones web elegantes <br /> para ideas innovadoras
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl font-text text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        En EscCode desarrollamos sitios y aplicaciones a medida, con diseño moderno, accesibilidad y alto rendimiento.
      </motion.p>

      <motion.a
        href="#services"
        className="mt-10 inline-block px-6 py-3 rounded-full bg-lime-400 text-black font-semibold font-text transition hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        VER SERVICIOS
      </motion.a>
    </section>
  )
}
