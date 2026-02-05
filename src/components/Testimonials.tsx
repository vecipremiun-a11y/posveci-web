"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Felicta Cajusol",
        role: "Dueña de Minimarket",
        content: "POSVECI ha mejorado mucho la gestión de mi negocio y, sobre todo, me encanta la velocidad con la que se realizan las ventas. No se queda pegado ni tarda en guardar, lo que hace que atender a los clientes sea mucho más rápido.",
        initials: "FC",
        color: "bg-purple-600"
    },
    {
        name: "Alberto Mejía",
        role: "Dueño de Minimarket",
        content: "Implementar POSVECI en mi minimarket me ha ayudado muchísimo a no olvidarme de los productos que solía comprar antes. Manejo muchos productos y el sistema me permite ver el historial de compras de forma clara y ordenada.",
        initials: "AM",
        color: "bg-blue-600"
    },
    {
        name: "Marcela Rojas",
        role: "Dueña de Almacén",
        content: "Antes llevaba todo en cuadernos y siempre se me pasaban cosas. Con POSVECI ahora tengo el inventario y las ventas claras, sé exactamente cuánto vendo y qué productos debo reponer.",
        initials: "MR",
        color: "bg-pink-600"
    },
    {
        name: "Luis Fernández",
        role: "Dueño de Botillería",
        content: "El control de caja y las ventas en POSVECI es excelente. Puedo ver aperturas, cierres y movimientos en tiempo real, lo que me da mucha más seguridad y control sobre mi negocio.",
        initials: "LF",
        color: "bg-cyan-600"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
    };

    // Helper to determine visible items based on index (simulated pagination of 2 items)
    // Actually, for a smoother carousel, simpler handling is usually showing chunks.
    // Let's stick to the 2-per-page logic implied by the grid-cols-2.
    // Index 0: 0,1. Index 1: 2,3.
    // Total pages = ceil(length / 2).

    const totalPages = Math.ceil(testimonials.length / 2);

    return (
        <section id="testimonials" className="py-20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Lo que dicen nuestros clientes
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto rounded-full" />
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10 hidden md:block border border-white/5"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10 hidden md:block border border-white/5"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {/* Group items into pairs for the slide effect on desktop */}
                            {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-1">
                                    {testimonials.slice(pageIndex * 2, pageIndex * 2 + 2).map((testimonial, i) => (
                                        <div key={i} className="glass p-8 rounded-2xl border border-white/5 relative h-full flex flex-col">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center text-xl font-bold text-white shrink-0`}>
                                                    {testimonial.initials}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                                                </div>
                                                <div className="ml-auto flex gap-1 text-yellow-500">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <Star key={starIndex} size={14} fill="currentColor" />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-slate-300 leading-relaxed italic flex-1">
                                                "{testimonial.content}"
                                            </p>
                                            <div className="mt-6 flex gap-4">
                                                <div className="px-3 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-medium">Cliente Verificado</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-cyan-400 w-6" : "bg-white/20 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
