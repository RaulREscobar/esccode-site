import {
  Code2,
  Smartphone,
  ShoppingCart,
  Brush
} from 'lucide-react'

export default function Services() {
  const servicios = [
    {
      icon: <Code2 className="w-8 h-8 text-lima" />,
      titulo: 'Sitios Web a Medida',
      desc: 'Creamos sitios únicos adaptados a tus necesidades, con foco en diseño, rendimiento y escalabilidad.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-lima" />,
      titulo: 'Aplicaciones Web',
      desc: 'Desarrollamos soluciones interactivas y funcionales para potenciar tu producto o servicio.'
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-lima" />,
      titulo: 'E-commerce',
      desc: 'Montamos tu tienda online con integraciones como WooCommerce, Tiendanube o Shopify.'
    },
    {
      icon: <Brush className="w-8 h-8 text-lima" />,
      titulo: 'Diseño UX/UI',
      desc: 'Diseñamos interfaces modernas, centradas en el usuario, combinando estética y funcionalidad.'
    }
  ]

  return (
    <section
      id="services"
      className="scroll-mt-20 py-10 px-6 bg-dark text-black"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl text-white font-title mb-4">Servicios</h2>
        <p className="text-lg font-text text-white mb-12">
          En EscCode convertimos ideas en soluciones digitales de alto impacto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, i) => (
            <div
              key={i}
              className="bg-black p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{servicio.icon}</div>
              <h3 className="font-title2 text-white text-xl mb-2">{servicio.titulo}</h3>
              <p className="font-text text-white">{servicio.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
