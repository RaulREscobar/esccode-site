'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-dark w-full py-20 px-4 md:px-40 px-auto md:flex flex-col items-center">
      <motion.h2
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-title text-white mb-6"
      >
        Contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg text-gray-700 font-text max-w-2xl mb-8 text-white"
      >
        ¿Tenés una idea o proyecto en mente? Escribinos y conversemos sobre cómo llevarlo adelante 🚀
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid gap-4 max-w-xl md:w-100"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Nombre"
          className="border border-gray-300 rounded-xl px-4 py-3 text-white font-text"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-xl px-4 py-3 text-white font-text"
        />
        <textarea
          placeholder="Tu mensaje"
          className="border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none text-white font-text"
        />
        <button
          type="submit"
          className="bg-lima text-black font-semibold py-3 px-6 rounded-xl w-fit hover:brightness-110 transition-all font-text"
        >
          Enviar mensaje
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 text-sm text-white font-text"
      >
        También podés escribirnos por <a href="https://wa.me/5491168644494" target="_blank" className="text-lima underline">WhatsApp</a> o al correo <span className="text-lima">contacto@esccode.com</span>
      </motion.div>
    </section>
  )
}
