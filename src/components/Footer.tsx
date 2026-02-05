import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Mail, Instagram, Facebook, Twitter, CheckCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative pt-20 pb-10 bg-[#02040a] border-t border-white/5 overflow-hidden">
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
                                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-lg shadow-cyan-500/25">
                                    Iniciar Demo Gratis
                                </Button>
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

            {/* Main Footer */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5 pb-8">
                    <div className="text-2xl font-bold tracking-tighter text-white">
                        POS<span className="text-cyan-400">VECI</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Inicio</Link>
                        <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Funcionalidades</Link>
                        <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Opiniones</Link>
                        <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Contacto</Link>
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
        </footer>
    );
}
