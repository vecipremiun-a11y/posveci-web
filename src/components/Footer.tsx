"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { Mail, Instagram, Facebook, Twitter, CheckCircle, Check, MessageSquare, Building2 } from "lucide-react";

export default function Footer() {
    const [isAnnual, setIsAnnual] = useState(false);
    const pathname = usePathname();
    const shouldHidePromo = pathname === "/demo" || pathname === "/contact";

    return (
        <footer className="relative pt-20 pb-10 bg-[#02040a] border-t border-white/5 overflow-hidden">
            {!shouldHidePromo && (
                <>
                    {/* CTA Section */}
                    <div className="container mx-auto px-4 md:px-6 mb-20">
                        <div className="glass-card rounded-3xl p-8 md:p-12 border border-cyan-500/20 shadow-2xl shadow-cyan-900/20 relative overflow-hidden">
                            {/* Background shine */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10" />

                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                {/* Left Content */}
                                <div className="flex-1 text-left">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                        ¡Prueba la <span className="text-cyan-400">Demo Gratis</span>!
                                    </h2>
                                    <p className="text-slate-300 text-lg mb-8">
                                        Descubre la <strong className="text-white">rapidez</strong> y <strong className="text-white">potencia</strong> del sistema <strong className="text-cyan-400">POS</strong> más eficiente.
                                    </p>

                                    <ul className="space-y-4 mb-8">
                                        {[
                                            "Gestiona ventas al instante",
                                            "Controla inventario en tiempo real",
                                            "Administra tu negocio fácilmente"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center gap-3 text-slate-200">
                                                <CheckCircle className="text-cyan-400" size={24} />
                                                <span className="text-lg">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-col items-start gap-3">
                                        <Link href="/demo">
                                            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-lg shadow-cyan-500/25">
                                                Iniciar Demo Gratis
                                            </Button>
                                        </Link>
                                        <p className="text-slate-500 text-sm pl-2">
                                            Sin registros ni compromisos
                                        </p>
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="flex-1 relative">
                                    {/* Blue glow effect behind tablet */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[80px] -z-10" />
                                    <Image
                                        src="/images/table flotante.png"
                                        alt="POSVECI Dashboard Tablet"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section (Prueba 15 días gratis) */}
                    <div className="container mx-auto px-4 md:px-6 mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                Prueba 15 días gratis
                            </h2>

                            {/* Toggle Switch */}
                            <div className="flex justify-center items-center gap-4 mb-4">
                                <span className={`text-lg transition-colors ${!isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>
                                    Mensual
                                </span>
                                <button
                                    onClick={() => setIsAnnual(!isAnnual)}
                                    className="w-16 h-8 bg-blue-900/50 rounded-full p-1 border border-blue-500/30 relative transition-colors hover:border-blue-400/50"
                                >
                                    <div className={`w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50 transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`} />
                                </button>
                                <span className={`text-lg transition-colors ${isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>
                                    Anual
                                </span>
                            </div>

                            <p className="text-slate-300 text-lg md:text-xl h-8">
                                {isAnnual ? (
                                    <span className="text-cyan-400 font-bold animate-in fade-in zoom-in duration-300">
                                        ¡Ahorra $60.000 al año!
                                    </span>
                                ) : (
                                    <span>Luego CLP $30.000 / empresa / mes</span>
                                )}
                            </p>
                        </div>

                        <div className="max-w-md mx-auto relative group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-xl group-hover:bg-blue-600/30 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent rounded-3xl blur-md -z-10" />

                            <div className="glass rounded-3xl p-1 border border-blue-500/30 relative overflow-hidden">
                                <div className="bg-[#02040a]/80 backdrop-blur-xl rounded-[20px] p-8 md:p-10 text-center h-full flex flex-col">

                                    <div className="mb-8">
                                        <span className="inline-block px-4 py-1 rounded-full bg-blue-900/50 text-blue-300 text-xs font-bold tracking-wider mb-4 border border-blue-500/20">
                                            {isAnnual ? 'PLAN ANUAL' : 'PLAN MENSUAL'}
                                        </span>
                                        <div className="flex items-end justify-center gap-1 mb-2">
                                            <span className="text-slate-400 text-lg mb-1">CLP</span>
                                            <div className="relative">
                                                <span className="text-4xl md:text-5xl font-bold text-white tabular-nums tracking-tight">
                                                    {isAnnual ? '$25.000' : '$30.000'}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-sm">
                                            por empresa / mes
                                            {isAnnual && <span className="block text-cyan-400 text-xs mt-1">facturado anualmente</span>}
                                        </p>
                                    </div>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-8" />

                                    <ul className="space-y-4 mb-10 text-left pl-4 md:pl-8">
                                        <li className="flex items-center gap-3">
                                            <Check className="text-cyan-400 shrink-0" size={20} />
                                            <span className="text-white font-bold text-lg">Sin límites</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <Check className="text-cyan-400 shrink-0" size={20} />
                                            <span className="text-slate-200">Usuarios ilimitados</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <Check className="text-cyan-400 shrink-0" size={20} />
                                            <span className="text-slate-200">Productos ilimitados</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <Check className="text-cyan-400 shrink-0" size={20} />
                                            <span className="text-slate-200">Ventas ilimitadas</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <Check className="text-cyan-400 shrink-0" size={20} />
                                            <span className="text-slate-200">Multíempresa incluida</span>
                                        </li>
                                    </ul>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-8" />

                                    <div className="space-y-3 mb-8 text-left pl-4 md:pl-8">
                                        <div className="flex items-center gap-3 text-sm text-slate-300">
                                            <MessageSquare size={16} className="text-blue-400" />
                                            <span>Ticket de soporte</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-300">
                                            <Building2 size={16} className="text-blue-400" />
                                            <span>SII (próximamente)</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <a
                                            href="https://app.posveci.com/registro"
                                            className="block w-full"
                                        >
                                            <Button className="w-full py-6 text-lg shadow-lg shadow-blue-600/20 mb-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-none">
                                                Comenzar prueba gratis
                                            </Button>
                                        </a>
                                        <p className="text-slate-500 text-xs">
                                            Sin riesgos | Cancelá en cualquier momento
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }

            {/* Main Footer */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5 pb-8">
                    <div className="text-2xl font-bold tracking-tighter text-white">
                        POS<span className="text-cyan-400">VECI</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">Inicio</Link>
                        <Link href="/#features" className="text-sm text-slate-400 hover:text-white transition-colors">Funcionalidades</Link>
                        <Link href="/#testimonials" className="text-sm text-slate-400 hover:text-white transition-colors">Opiniones</Link>
                        <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contacto</Link>
                    </div>

                    <div className="flex gap-4">
                        <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Instagram size={20} /></Link>
                        <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Facebook size={20} /></Link>
                        <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Twitter size={20} /></Link>
                    </div>
                </div>

                <div className="mt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-slate-600">
                    <p>&copy; 2024 POSVECI. Todos los derechos reservados.</p>
                    <p>info@posveci.com</p>
                </div>
            </div>
        </footer >
    );
}
