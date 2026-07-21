"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { Mail, Instagram, Facebook, Twitter, CheckCircle, Check, MessageSquare, Building2, Globe, CreditCard, Scale, Clock, ShoppingCart, Package, FileText, Smartphone, Star, Zap, BarChart3, ArrowRight, Lock, ShieldCheck } from "lucide-react";

export default function Footer() {
    const pathname = usePathname();
    const shouldHidePromo = pathname === "/demo" || pathname === "/contact";
    const [billing, setBilling] = useState<"mensual" | "anual">("mensual");

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
                                    {/* Badge superior */}
                                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/5 px-4 py-2 mb-6">
                                        <Star className="h-4 w-4 text-cyan-400" />
                                        <span className="text-xs font-bold tracking-wider text-white">
                                            <span className="text-cyan-400">ACCESO</span> COMPLETO · <span className="text-cyan-400">SIN TARJETA</span> · SIN COMPROMISO
                                        </span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                                        ¡Prueba la Demo <br className="hidden md:block" />
                                        <span className="text-gradient">Gratis por 30 Días!</span>
                                    </h2>
                                    <p className="text-slate-300 text-lg mb-8">
                                        Descubre la <strong className="text-white">rapidez</strong> y <strong className="text-white">potencia</strong> del sistema <strong className="text-cyan-400">POS</strong> más eficiente y lleva tu negocio al siguiente nivel.
                                    </p>

                                    <ul className="space-y-5 mb-10">
                                        {[
                                            { icon: <Zap size={20} />, title: "Ventas al instante", desc: "Procesa ventas en segundos y mejora la experiencia de tus clientes." },
                                            { icon: <Package size={20} />, title: "Inventario en tiempo real", desc: "Control total de stock, vencimientos y alertas inteligentes." },
                                            { icon: <BarChart3 size={20} />, title: "Gestión fácil y completa", desc: "Reportes, caja, clientes y más... todo desde una sola plataforma." },
                                        ].map((item) => (
                                            <li key={item.title} className="flex items-start gap-4">
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-900/40 text-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.25)]">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-white font-semibold">{item.title}</p>
                                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Principal */}
                                    <Link href="/demo" className="group block w-full sm:w-auto sm:max-w-md">
                                        <div className="relative flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 px-5 py-4 shadow-[0_0_35px_rgba(34,211,238,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.65),inset_0_1px_0_rgba(255,255,255,0.35)]">
                                            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border border-white/40 bg-white/15 p-2 backdrop-blur-sm">
                                                <span className="text-lg font-extrabold leading-none text-white">30</span>
                                                <span className="text-[8px] font-bold tracking-widest text-white/90">DÍAS</span>
                                            </div>
                                            <div className="flex-1 text-left">
                                                <div className="text-lg font-extrabold text-white">Iniciar Demo Gratis</div>
                                                <div className="text-xs text-white/80">Comienza ahora tu prueba sin compromiso</div>
                                            </div>
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1">
                                                <ArrowRight className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Trust row */}
                                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            <ShieldCheck size={16} className="text-cyan-400" />
                                            <span>Sin tarjeta de crédito</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            <Lock size={16} className="text-cyan-400" />
                                            <span>Acceso completo</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            <CheckCircle size={16} className="text-cyan-400" />
                                            <span>Cancela cuando quieras</span>
                                        </div>
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

                    {/* Pricing Section */}
                    <div className="container mx-auto px-4 md:px-6 mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                                Prueba 30 días gratis
                            </h2>
                            <p className="text-slate-300 text-lg md:text-xl">
                                Control total de tu negocio en un solo sistema
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 mt-4">
                                {[
                                    { icon: "⚡", label: "Rápido" },
                                    { icon: "✅", label: "Completo" },
                                    { icon: "👍", label: "Fácil de usar" },
                                    { icon: "🔒", label: "Seguro" },
                                ].map((tag) => (
                                    <span key={tag.label} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                                        {tag.icon} {tag.label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Toggle Mensual / Anual */}
                        <div className="flex justify-center mb-10">
                            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10">
                                <button
                                    onClick={() => setBilling("mensual")}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${billing === "mensual" ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-600/30" : "text-slate-400 hover:text-white"}`}
                                >
                                    Mensual
                                </button>
                                <button
                                    onClick={() => setBilling("anual")}
                                    className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${billing === "anual" ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-600/30" : "text-slate-400 hover:text-white"}`}
                                >
                                    Anual
                                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold border border-green-500/30">
                                        2 meses gratis
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
                            {/* PLAN STANDARD */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-xl group-hover:bg-blue-600/20 transition-all duration-500" />
                                <div className="glass rounded-3xl p-1 border border-blue-500/30 relative overflow-hidden h-full">
                                    <div className="bg-[#02040a]/80 backdrop-blur-xl rounded-[20px] p-8 md:p-10 h-full flex flex-col">
                                        <div className="text-center mb-6">
                                            <span className="inline-block px-5 py-1.5 rounded-full bg-blue-900/50 text-blue-300 text-xs font-bold tracking-wider mb-4 border border-blue-500/30">
                                                PLAN STANDARD
                                            </span>
                                            <div className="flex items-end justify-center gap-1 mb-1">
                                                <span className="text-slate-400 text-lg mb-1">CLP</span>
                                                <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">{billing === "mensual" ? "$15.000" : "$140.000"}</span>
                                            </div>
                                            <p className="text-slate-400 text-sm">{billing === "mensual" ? "por sucursal / mes" : "por sucursal / año"}</p>
                                        </div>

                                        <p className="text-center text-xs font-bold tracking-widest text-slate-300 mb-6 uppercase">
                                            Todo lo que necesitas para ordenar tu negocio
                                        </p>

                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6" />

                                        <ul className="space-y-5 mb-8 text-left flex-1">
                                            {[
                                                { title: "Punto de venta, clientes e historial", desc: "POS rápido, ficha de clientes y todo tu historial de ventas siempre disponible." },
                                                { title: "Inventario completo", desc: "Productos, categorías, proveedores, compras y facturas gestionados en un solo lugar." },
                                                { title: "Facturación electrónica SII", desc: "Emite boletas y facturas electrónicas 100% integradas con el SII." },
                                                { title: "Reportes de ventas y de cajas", desc: "Cuadraturas de caja y reportes claros para tomar mejores decisiones." },
                                                { title: "Todo ilimitado", desc: "Usuarios, productos, clientes y ventas sin límites, desde el primer día." },
                                            ].map((feature) => (
                                                <li key={feature.title} className="flex items-start gap-3">
                                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-500/30 mt-0.5">
                                                        <Check className="text-cyan-400" size={14} />
                                                    </div>
                                                    <div>
                                                        <p className="text-slate-100 text-sm font-semibold leading-snug">{feature.title}</p>
                                                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">{feature.desc}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-xl bg-blue-900/30 border border-blue-500/20">
                                            <Building2 size={18} className="text-cyan-400" />
                                            <span className="text-white text-sm font-semibold">SII 100% integrado</span>
                                        </div>

                                        <div className="mt-auto">
                                            <a href="https://app.posveci.com/registro" className="block w-full">
                                                <Button className="w-full py-5 text-base shadow-lg shadow-blue-600/20 mb-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-none">
                                                    Comenzar prueba gratis
                                                </Button>
                                            </a>
                                            <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                                                <span>🕐 30 días gratis</span>
                                                <span>|</span>
                                                <span>🔒 Sin riesgos</span>
                                                <span>|</span>
                                                <span>❌ Cancela cuando quieras</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PLAN PROFESIONAL */}
                            <div className="relative group">
                                {/* Badge MÁS POPULAR */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold tracking-wider shadow-lg shadow-purple-600/40">
                                        ★ MÁS POPULAR
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-purple-600/15 rounded-3xl blur-xl group-hover:bg-purple-600/25 transition-all duration-500" />
                                <div className="glass rounded-3xl p-1 border border-purple-500/40 relative overflow-hidden h-full">
                                    <div className="bg-[#02040a]/80 backdrop-blur-xl rounded-[20px] p-8 md:p-10 h-full flex flex-col">
                                        <div className="text-center mb-6">
                                            <span className="inline-block px-5 py-1.5 rounded-full bg-purple-900/50 text-purple-300 text-xs font-bold tracking-wider mb-4 border border-purple-500/30">
                                                PLAN PROFESIONAL
                                            </span>
                                            <div className="flex items-end justify-center gap-1 mb-1">
                                                <span className="text-slate-400 text-lg mb-1">CLP</span>
                                                <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">{billing === "mensual" ? "$30.000" : "$270.000"}</span>
                                            </div>
                                            <p className="text-slate-400 text-sm">{billing === "mensual" ? "por sucursal / mes" : "por sucursal / año"}</p>
                                        </div>

                                        <p className="text-center text-sm font-bold text-purple-300 mb-6">
                                            TODO LO DEL <span className="text-white">PLAN STANDARD</span> +
                                        </p>

                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-6" />

                                        <ul className="space-y-5 mb-8 text-left flex-1">
                                            {[
                                                { title: "Ventas offline y órdenes de compra", desc: "Sigue vendiendo aunque se caiga internet y gestiona tus órdenes de compra." },
                                                { title: "Personal y administración financiera", desc: "Control de asistencia, nómina de sueldos y las finanzas de tu negocio." },
                                                { title: "Sorteos, combos y perfil de producto", desc: "Herramientas avanzadas de marketing e inventario para vender más." },
                                                { title: "Reportes avanzados", desc: "Análisis de utilidad, tendencias y control de vencimientos (FEFO)." },
                                                { title: "Marketplace + sucursales adicionales", desc: "Amplía tu sistema con complementos y suma todas las sucursales que necesites." },
                                                { title: "Soporte prioritario 24/7", desc: "Atención preferente a toda hora y 2 h de capacitación personalizada incluidas." },
                                            ].map((feature) => (
                                                <li key={feature.title} className="flex items-start gap-3">
                                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/15 border border-purple-500/30 mt-0.5">
                                                        <Check className="text-purple-400" size={14} />
                                                    </div>
                                                    <div>
                                                        <p className="text-slate-100 text-sm font-semibold leading-snug">{feature.title}</p>
                                                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">{feature.desc}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto">
                                            <a href="https://app.posveci.com/registro" className="block w-full">
                                                <Button className="w-full py-5 text-base shadow-lg shadow-purple-600/20 mb-3 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 border-none">
                                                    Comenzar prueba gratis
                                                </Button>
                                            </a>
                                            <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                                                <span>🕐 30 días gratis</span>
                                                <span>|</span>
                                                <span>🔒 Sin riesgos</span>
                                                <span>|</span>
                                                <span>❌ Cancela cuando quieras</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Integraciones y compatibilidad */}
                        <div className="mt-16 max-w-6xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
                                Integraciones y compatibilidad
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                                {[
                                    { icon: <ShoppingCart size={28} />, label: "POS", desc: "Ventas rápidas", badge: null },
                                    { icon: <Package size={28} />, label: "Inventario", desc: "Stock en tiempo real", badge: null },
                                    { icon: <FileText size={28} />, label: "SII", desc: "Boleta y Factura", badge: null },
                                    { icon: <CreditCard size={28} />, label: "Medios de Pago", desc: "", badge: "Próximamente" },
                                    { icon: <Scale size={28} />, label: "Balanzas", desc: "", badge: "Próximamente" },
                                    { icon: <Globe size={28} />, label: "Tienda Online", desc: "Web integrada", badge: null },
                                ].map((item) => (
                                    <div key={item.label} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                                        <div className="text-cyan-400 mb-2">{item.icon}</div>
                                        <span className="text-white text-sm font-semibold">{item.label}</span>
                                        {item.badge ? (
                                            <span className="text-yellow-400 text-[10px] font-bold mt-1">{item.badge}</span>
                                        ) : (
                                            <span className="text-slate-500 text-[11px] mt-1">{item.desc}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* CTA WhatsApp + Prueba gratis */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20">
                                <div className="text-center sm:text-left">
                                    <p className="text-white font-bold text-lg">Prueba 30 días <span className="text-cyan-400 text-2xl font-extrabold">GRATIS</span></p>
                                    <p className="text-slate-400 text-sm">sin compromiso</p>
                                </div>
                                <a
                                    href="https://wa.me/56950225491"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 transition-colors text-white font-semibold"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    +56 9 5022 5491
                                </a>
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
