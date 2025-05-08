"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "María Gómez",
    role: "Fundadora de Libres Creativos",
    comment:
      "Trabajar con EscCode fue una experiencia increíble. Captaron la idea de mi proyecto desde el primer momento y lo ejecutaron con gran profesionalismo.",
    avatar: "/avatars/avatar.jpg",
  },
  {
    name: "Luciano Pérez",
    role: "CTO en NubeMarket",
    comment:
      "Destaco la calidad del código, la comunicación constante y la capacidad de resolver rápido cualquier cambio. EscCode es sinónimo de eficiencia.",
    avatar: "/avatars/avatar.jpg",
  },
  {
    name: "Valeria Ruiz",
    role: "Emprendedora",
    comment:
      "Me ayudaron a lanzar mi tienda online en tiempo récord. El diseño quedó hermoso y la plataforma funciona perfecto. ¡Gracias!",
    avatar: "/avatars/avatar.jpg",
  },
];

export default function Testimonials() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {

    const autoplay = () => {
        if (instanceRef.current) {
          timeoutRef.current = setTimeout(() => {
            instanceRef.current?.next();
          }, 5000);
        }
      };

    autoplay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [instanceRef]);

  return (
    <section id="testimonials" className="w-full py-20 md:px-40 bg-dark">
      <h2 className="text-3xl text-center md:text-4xl font-title text-white mb-10">
        Lo que dicen nuestros clientes
      </h2>
  
      <div className="relative overflow-visible">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-black rounded-2xl shadow-md p-6 min-h-[250px] flex flex-col justify-between"
            >
              <p className="text-white text-white font-text mb-4">“{item.comment}”</p>
              <div className="flex items-center gap-4 mt-4">
                <img width='30px' height='30px' src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover"/>
                <div className="text-sm text-gray-600 font-text">
                  <span className="font-semibold text-white">{item.name}</span><br />
                  <span className="text-white">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Flechas fuera del carrusel */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute hidden top-1/2 -translate-y-1/2 bg-lime-400 shadow rounded-full p-2 z-10 hover:bg-black hover:text-white transition md:inline -left-18"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute hidden top-1/2 -translate-y-1/2 bg-lime-400 shadow rounded-full p-2 z-10 hover:bg-black hover:text-white transition md:inline -right-18"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
  
}
