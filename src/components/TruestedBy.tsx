'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const clients = [
  {
    name: 'Atym Online',
    logo: '/proyectos/atym.jpg',
    url: 'https://atym.online',
  },
  {
    name: 'Chongazen',
    logo: '/proyectos/chongazen.png',
    url: 'https://chongazen.com',
  },
  {
    name: 'Lamparas DELALUZ',
    logo: '/proyectos/delaluz.jpg',
    url: 'https://lamparasdelaluz.coom',
  },
  {
    name: 'Gran Sabana',
    logo: '/proyectos/gs.jpg',
    url: 'https://gransabanaremesas.web.app',
  },
  {
    name: 'Laura Toro',
    logo: '/proyectos/lauratoro.png',
    url: 'https://lauratoro.com.ar',
  },
  {
    name: 'TechNous',
    logo: '/proyectos/technous.jpg',
    url: 'https://technous.web.app',
  },
  // Podés agregar más logos acá
]
export default function TrustedBy() {
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let isCancelled = false

    const startAnimation = async () => {
      while (!isCancelled) {
        if (!isHovered) {
          await controls.start({
            x: '-100%',
            transition: { duration: clients.length * 8, ease: 'linear' },
          })
          controls.set({ x: 0 })
        } else {
          await new Promise((res) => setTimeout(res, 100))
        }
      }
    }

    startAnimation()

    return () => {
      isCancelled = true
    }
  }, [controls, isHovered])

  return (
    <section className="py-12 bg-dark overflow-hidden">
      <h2 className="text-4xl text-center md:text-5xl font-title mb-4">Clientes que confían en nosotros</h2>
      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-20 w-max"
          animate={controls}
          initial={{ x: 0 }}
        >
          {[...clients, ...clients].map((client, index) => (
            <a
              href={client.url}
              target="_blank"
              key={`${client.name}-${index}`}
              rel="noopener noreferrer"
              className="min-w-[50px] h-50 flex flex-col gap-2 items-center justify-center opacity-50 hover:opacity-100 transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-30 w-30 object-contain rounded-full"
              />
            <p>{client.name}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}