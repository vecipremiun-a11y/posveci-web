"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { User, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    return (
        <main className="min-h-screen bg-[#02040a] relative overflow-hidden flex items-center justify-center pt-32 pb-20">
            {/* Background Effects (Starry/Nebula look) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Tiny stars (simulated with small divs) */}
            <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" />
            <div className="absolute top-[15%] right-[20%] w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse delay-75" />
            <div className="absolute bottom-[30%] left-[15%] w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse delay-150" />

            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16 relative">
                    <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 backdrop-blur-sm">
                        <Mail className="w-4 h-4 inline-block mr-2" />
                        Contáctanos
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Contáctanos
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        ¿Tienes preguntas o necesitas ayuda? Completa el formulario o contáctanos directamente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Left Column: Form */}
                    <div className="glass-card p-6 md:p-10 rounded-3xl border border-blue-500/20 shadow-2xl relative overflow-hidden group">
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-sm text-slate-400 ml-1">Nombre</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-slate-500" />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full bg-[#050b14] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                        placeholder="Tu nombre completo"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm text-slate-400 ml-1">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-slate-500" />
                                    </div>
                                    <input
                                        type="email"
                                        className="w-full bg-[#050b14] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                        placeholder="tu@correo.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="text-sm text-slate-400 ml-1">Teléfono (opcional)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-slate-500" />
                                    </div>
                                    <input
                                        type="tel"
                                        className="w-full bg-[#050b14] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                        placeholder="+56 9 1234 5678"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-sm text-slate-400 ml-1">Mensaje</label>
                                <textarea
                                    className="w-full bg-[#050b14] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all min-h-[120px] resize-none"
                                    placeholder="¿En qué podemos ayudarte?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <Button className="w-full py-6 text-lg font-bold shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                                Enviar Mensaje
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="glass-card p-6 md:p-10 rounded-3xl border border-blue-500/20 bg-blue-950/20 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden">
                        {/* Background texture */}
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                                Contacta directo
                            </h3>

                            <div className="space-y-6">
                                {/* WhatsApp */}
                                <a href="https://wa.me/56950225491" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#050b14]/50 border border-white/5 hover:border-cyan-500/30 hover:bg-[#050b14] transition-all group">
                                    <div className="p-3 rounded-full bg-green-500/10 text-green-500 group-hover:bg-green-500/20 transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">WhatsApp</p>
                                        <p className="text-white font-medium group-hover:text-green-400 transition-colors">+56 9 5022 5491</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a href="mailto:contact@posveci.com" className="flex items-center gap-4 p-4 rounded-xl bg-[#050b14]/50 border border-white/5 hover:border-cyan-500/30 hover:bg-[#050b14] transition-all group">
                                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Email</p>
                                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">contacto@posveci.com</p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#050b14]/50 border border-white/5 hover:border-cyan-500/30 hover:bg-[#050b14] transition-all group">
                                    <div className="p-3 rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Ubicación</p>
                                        <p className="text-white font-medium group-hover:text-purple-400 transition-colors">Iquique, Chile</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-slate-400 text-sm mb-4">Síguenos en redes sociales</p>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 rounded-xl bg-[#050b14] text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="p-3 rounded-xl bg-[#050b14] text-slate-400 hover:text-white hover:bg-pink-600 transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="p-3 rounded-xl bg-[#050b14] text-slate-400 hover:text-white hover:bg-blue-700 transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="p-3 rounded-xl bg-[#050b14] text-slate-400 hover:text-white hover:bg-sky-500 transition-all">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
