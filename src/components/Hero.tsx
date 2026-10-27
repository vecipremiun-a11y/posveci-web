import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CreditCard, Play, ShieldCheck } from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";

const perks = [
    { icon: CalendarCheck, label: "30 días gratis" },
    { icon: CreditCard, label: "Sin tarjeta de crédito" },
    { icon: ShieldCheck, label: "Cancela cuando quieras" },
];

export default function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden pt-[76px]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid items-center gap-10 py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-0 lg:py-12">
                    <div className="max-w-xl">
                        <span className="inline-flex items-center rounded-lg bg-mint px-3 py-1.5 text-xs font-bold tracking-wide text-leaf-dark">
                            SISTEMA POS PARA ALMACENES Y MINIMARKETS
                        </span>
                        <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-navy sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-[4.25rem]">
                            <span className="block">Tu minimarket</span>
                            <span className="block text-brand">más simple,</span>
                            <span className="block text-brand">más rentable</span>
                        </h1>
                        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink xl:text-xl">
                            Vende, controla tu stock y conoce tu negocio en tiempo real.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link href="https://app.posveci.com/registro" className={buttonStyles("primary", "lg", "px-8")}>
                                Probar gratis
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                            <Link href="/demo" className={buttonStyles("secondary", "lg", "px-7")}>
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
                                    <Play size={12} fill="currentColor" aria-hidden="true" />
                                </span>
                                Ver demo
                            </Link>
                        </div>

                        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                            {perks.map((perk) => (
                                <li key={perk.label} className="flex items-center gap-2 text-sm font-medium text-ink">
                                    <perk.icon size={18} className="text-brand" aria-hidden="true" />
                                    {perk.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Imagen dentro de los márgenes de la página; su borde izquierdo ya viene difuminado a blanco */}
                    <div className="relative aspect-[1272/941] w-full overflow-hidden rounded-r-[1.5rem] lg:rounded-r-[2rem]">
                        <Image
                            src="/images/landing/hero-asistente-recorte.webp"
                            alt="Vendedora de minimarket usando POSVECI: stock bajo, ventas de hoy y asistente"
                            fill
                            priority
                            sizes="(min-width: 1536px) 820px, (min-width: 1024px) 55vw, 100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-white to-transparent" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>
    );
}
