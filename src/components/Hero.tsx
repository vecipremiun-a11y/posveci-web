import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Store, ShoppingBag, Receipt } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative pt-32 pb-56 md:pt-48 md:pb-48 overflow-x-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left z-20 px-4 lg:px-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Sistema de Gestión para <br className="hidden lg:block" />
                            <span className="text-gradient">Minimarket, Carnicería, Botillerías y Panaderías</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Optimiza tu negocio con <span className="text-cyan-400 font-semibold">POSVECI</span>.
                            Controla ventas, inventario, caja y mucho más, de manera rápida y eficiente.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/demo">
                                <Button size="lg" className="group">
                                    Solicita Demo Gratis
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="secondary" size="lg">
                                    Contáctanos
                                </Button>
                            </Link>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-white/5 rounded-lg text-cyan-400">
                                    <Store size={24} />
                                </div>
                                <span className="text-xs">Minimarket</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-white/5 rounded-lg text-cyan-400">
                                    <ShoppingBag size={24} />
                                </div>
                                <span className="text-xs">Botillería</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-white/5 rounded-lg text-cyan-400">
                                    <Receipt size={24} />
                                </div>
                                <span className="text-xs">Carnicería</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - 3D Floating Composition */}
                    <div className="flex-1 relative w-full lg:w-[120%] lg:min-w-[800px] perspective-1000 lg:translate-x-10 mt-16 lg:mt-0 z-10 scale-110 md:scale-125 lg:scale-100">

                        {/* 3D Container with Independent Layers */}
                        <div className="relative w-full aspect-[16/10] preserve-3d">

                            {/* Glow Effect behind (Moved to start to ensure background rendering) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 rounded-full blur-[100px] -z-10" />

                            {/* Layer 1: Laptop (Background Center) */}
                            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[110%] h-auto preserve-3d animate-float-delayed z-10">
                                <Image
                                    src="/images/laptop flotante.png"
                                    alt="POSVECI Dashboard Laptop"
                                    width={1200}
                                    height={720}
                                    className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.6)]"
                                    priority
                                    quality={75}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                                />
                            </div>

                            {/* Layer 2: Tablet POS (Left Foreground) */}
                            <div className="absolute bottom-[-5%] left-[-3%] w-[75%] h-auto preserve-3d animate-float-icon-1 z-20">
                                <Image
                                    src="/images/table flotante.png"
                                    alt="POSVECI Tablet POS"
                                    width={500}
                                    height={375}
                                    className="object-contain hover:scale-105 transition-transform duration-300"
                                    priority
                                    quality={75}
                                    sizes="(max-width: 768px) 70vw, (max-width: 1200px) 60vw, 700px"
                                />
                            </div>

                            {/* Layer 3: Mobile App (Right Foreground) */}
                            <div className="absolute bottom-[-5%] right-[4%] w-[22%] h-auto preserve-3d animate-float-icon-2 z-30">
                                <Image
                                    src="/images/celular flotante.png"
                                    alt="POSVECI Mobile App"
                                    width={250}
                                    height={500}
                                    className="object-contain hover:scale-105 transition-transform duration-300"
                                    priority
                                    quality={75}
                                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 250px"
                                />
                            </div>

                            {/* Floating Elements (Icons/Badges) */}
                            <div className="absolute top-[10%] left-[10%] p-4 glass-card rounded-2xl animate-float-icon-3 shadow-lg shadow-cyan-500/20 border-cyan-500/30 z-40 hidden lg:block">
                                <Store className="w-8 h-8 text-cyan-400" />
                            </div>

                            <div className="absolute top-[20%] right-[10%] p-3 glass-card rounded-2xl animate-float shadow-lg shadow-indigo-500/20 border-indigo-500/30 z-40 hidden lg:block">
                                <div className="text-xl font-bold text-indigo-400">$</div>
                            </div>

                            {/* Additional Icon: Receipt */}
                            <div className="absolute bottom-[20%] right-[-5%] p-3 glass-card rounded-2xl animate-float-delayed shadow-lg shadow-blue-500/20 border-blue-500/30 z-0 hidden lg:block">
                                <Receipt className="w-6 h-6 text-blue-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
