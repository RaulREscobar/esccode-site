'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [showThanks, setShowThanks] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    await fetch('https://formsubmit.co/ajax/holaesccode@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset()
        setShowThanks(true)
        setTimeout(() => setShowThanks(false), 4000) // Oculta después de 4s
      }
    }).catch(error => {
      console.error('Error al enviar formulario:', error)
    })
  }

  return (
    <section id="contact" className="bg-dark w-full py-20 px-4 md:px-40 px-auto md:flex flex-col items-center relative">
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
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="border border-gray-300 rounded-xl px-4 py-3 text-white font-text bg-transparent"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border border-gray-300 rounded-xl px-4 py-3 text-white font-text bg-transparent"
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          required
          className="border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none text-white font-text bg-transparent"
        />
        <button
          type="submit"
          className="bg-lima text-black font-semibold py-3 px-6 rounded-xl w-fit hover:brightness-110 transition-all font-text"
        >
          Enviar mensaje
        </button>
      </motion.form>

      {showThanks && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity:  0}}
          className="fixed top-1/2 left-1/2 z-50 bg-lime-200 text-black px-6 py-4 rounded-2xl shadow-lg transform -translate-x-1/2 -translate-y-1/2 text-center font-text"
        >
          <p className="text-lg font-semibold">¡Gracias por tu mensaje! 💌</p> <br />
          <p className="text-lg font-semibold">Te responderemos pronto </p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 text-sm text-white font-text"
      >
        También podés escribirnos por <a href="https://wa.me/5491168644494" target="_blank" className="text-lima underline">WhatsApp</a> o al correo <a href="mailto:holaesccode@gmail.com" target="_blank" className="text-lima">holaesccode@gmail.com</a>
      </motion.div>
    </section>
  )
}
