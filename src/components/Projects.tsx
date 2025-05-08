"use client";

export default function Projects() {
  const proyectos = [
    {
      titulo: "Catálogo Online para Librería",
      descripcion:
        "Diseño y desarrollo de una tienda online para una librería local. Optimizado para móviles y con panel autoadministrable.",
      tecnologias: ["Next.js", "Tailwind", "Firebase"],
      imagen: "/proyectos/atym.jpg",
      url: "https://atym.nline",
    },
    {
      titulo: "App de Pedidos para Sucursales",
      descripcion:
        "Aplicación web para gestionar pedidos y envíos por WhatsApp. Cada sucursal tiene su propio panel.",
      tecnologias: ["React", "Firebase", "WhatsApp API"],
      imagen: "/proyectos/gs.jpg",
      url: "https://gransabanaremesas.web.app",
    },
    {
      titulo: "Landing Page para Estética",
      descripcion:
        "Landing page moderna y responsiva para salón de uñas, con integración a Instagram y botón de reserva.",
      tecnologias: ["Next.js", "Tailwind", "Framer Motion"],
      imagen: "/proyectos/chongazen.png",
      url: "https://chongazen.com",
    },
    /* {
      titulo: "Landing Page para Estética",
      descripcion:
        "Landing page moderna y responsiva para salón de uñas, con integración a Instagram y botón de reserva.",
      tecnologias: ["Next.js", "Tailwind", "Framer Motion"],
      imagen: "/proyectos/delaluz.jpg",
      url: "https://lamparasdelaluz.com",
    }, */
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-10 px-6 bg-dark text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-title mb-4">Proyectos</h2>
        <p className="text-lg font-text mb-12">
          Algunos trabajos recientes que reflejan lo que hacemos en EscCode.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {proyectos.map((p, i) => (
            <div
              key={i}
              className="bg-black rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-50 flex justify-center pt-5">
                <img src={p.imagen} alt={p.titulo} className="h-48 w-50 object-scale-down"/>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-title2 mb-2 text-white">{p.titulo}</h3>
                <p className="text-sm font-text mb-3 text-white">
                  {p.descripcion}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-text text-lima">
                  {p.tecnologias.map((tec, idx) => (
                    <li key={idx} className="bg-lima/10 px-2 py-1 rounded-full">
                      {tec}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 rounded-full bg-lima text-black font-semibold text-sm hover:bg-lima/80 transition"
                >
                  Ver sitio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
