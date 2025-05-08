'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-stone-900 py-20 px-4 md:px-40 px-auto flex flex-col md:flex-row items-center gap-15">
      <section>
      <motion.h2
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-title text-white mb-6"
      >
        Sobre nosotros
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg text-white font-text max-w-3xl leading-relaxed"
      >
        En <span className="text-lima font-semibold">EscCode</span> nos especializamos en crear sitios y aplicaciones web que combinan diseño, funcionalidad y rendimiento. Somos una consultora ágil, con foco en el detalle, la innovación y la tecnología como herramienta para transformar ideas en soluciones digitales.
        <br /><br />
        Creemos en el trabajo colaborativo, el código limpio y en construir relaciones de largo plazo con nuestros clientes.
      </motion.p>
      </section>
      <section>
        <img src="/desarrollo-sostenible.jpg" alt='Imagn de nosotros' width='500px' height='500px' />
      </section>
    </section>
  )
}
