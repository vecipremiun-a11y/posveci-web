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
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="flex flex-col justify-center pt-10 lg:h-[540px] lg:pt-0 xl:h-[600px] 2xl:h-[680px]">
                    <div className="max-w-xl lg:max-w-[430px] xl:max-w-[520px]">
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
                </div>
            </div>

            {/* Imagen: debajo del texto en celular, a la derecha detrás del texto en escritorio */}
            <div className="relative mb-10 mt-10 aspect-[5/4] w-full sm:aspect-[16/10] lg:absolute lg:mb-0 lg:right-0 lg:top-[76px] lg:mt-0 lg:aspect-[1672/941] lg:h-[540px] lg:w-auto xl:h-[600px] 2xl:h-[680px]">
                <Image
                    src="/images/landing/hero-asistente.webp"
                    alt="Vendedora de minimarket usando POSVECI: stock bajo, ventas de hoy y asistente"
                    fill
                    priority
                    sizes="(min-width: 1536px) 1210px, (min-width: 1280px) 1070px, (min-width: 1024px) 960px, 100vw"
                    className="object-cover object-right"
                />
                <div className="absolute inset-x-0 bottom-0 hidden h-20 bg-gradient-to-t from-white to-transparent lg:block" aria-hidden="true" />
            </div>
        </section>
    );
}
