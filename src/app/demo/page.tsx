"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { User, Mail, Phone, Store, CheckCircle } from "lucide-react";

export default function DemoPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        privacy: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setIsSubmitted(true); // Show the credentials view
                // Optionally clear form if we weren't switching views
                // setFormData({ ...formData, name: "", email: "", phone: "", business: "" });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Hubo un error al enviar la solicitud.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Error de conexión. Inténtalo de nuevo.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#02040a] relative overflow-hidden flex items-center justify-center pt-24 pb-20">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 flex justify-center">
                <div className="w-full max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        Solicita una <span className="text-cyan-400">Demo gratuita</span>
                    </h1>
                    <p className="text-slate-300 text-lg mb-10 text-center">
                        Prueba POSVECI gratis hoy mismo. Accede a nuestra versión demo sin ningún compromiso
                        para explorar todas las funcionalidades del sistema.
                    </p>

                    <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                        {/* Card Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px] -z-10" />

                        {isSubmitted ? (
                            <div className="text-center animate-in fade-in zoom-in duration-300">
                                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl inline-block">
                                    <p className="text-green-400 font-bold flex items-center gap-2">
                                        <CheckCircle size={20} />
                                        ¡Solicitud enviada! Te contactaremos pronto.
                                    </p>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    ¡Gracias <span className="text-cyan-400 capitalize">{formData.name}</span>!
                                </h3>
                                <p className="text-slate-300 mb-8">
                                    Aquí tienes tus credenciales para acceder a la demo inmediatamente:
                                </p>

                                <div className="bg-[#0a0c14]/50 border border-white/10 rounded-2xl p-6 mb-8 text-left space-y-4">
                                    <div className="flex justify-between items-center bg-[#02040a] p-4 rounded-xl border border-white/5">
                                        <span className="text-slate-400 text-sm">Usuario:</span>
                                        <span className="text-cyan-400 font-mono font-bold text-lg">vecino</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-[#02040a] p-4 rounded-xl border border-white/5">
                                        <span className="text-slate-400 text-sm">Contraseña:</span>
                                        <span className="text-cyan-400 font-mono font-bold text-lg">vecino123</span>
                                    </div>
                                </div>

                                <a
                                    href="https://demo.posveci.com/login?user=vecino&password=vecino123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="w-full py-6 text-lg font-bold shadow-lg shadow-cyan-500/20">
                                        Iniciar Sesión
                                    </Button>
                                </a>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                                    Completa el formulario:
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name */}
                                    <div className="space-y-1">
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors" size={20} />
                                            <input
                                                type="text"
                                                placeholder="Nombre"
                                                className="w-full bg-[#0a0c14]/80 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1">
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors" size={20} />
                                            <input
                                                type="email"
                                                placeholder="Correo Electrónico"
                                                className="w-full bg-[#0a0c14]/80 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-1">
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors" size={20} />
                                            <input
                                                type="tel"
                                                placeholder="Teléfono"
                                                className="w-full bg-[#0a0c14]/80 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Business */}
                                    <div className="space-y-1">
                                        <div className="relative group">
                                            <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors" size={20} />
                                            <input
                                                type="text"
                                                placeholder="Tu Negocio"
                                                className="w-full bg-[#0a0c14]/80 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                                                value={formData.business}
                                                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Privacy Checkbox */}
                                    <div className="flex items-start gap-3 mt-4">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                id="privacy"
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-white/20 bg-[#0a0c14] checked:border-cyan-500 checked:bg-cyan-500 transition-all"
                                                checked={formData.privacy}
                                                onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                                                required
                                            />
                                            <CheckCircle className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#02040a] opacity-0 peer-checked:opacity-100 transition-opacity" size={14} />
                                        </div>
                                        <label htmlFor="privacy" className="text-sm text-slate-300 cursor-pointer select-none">
                                            Acepto la política de privacidad
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        className="w-full py-6 mt-6 text-lg font-bold shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Enviando..." : "Solicitar Demo Gratis"}
                                    </Button>

                                    {status === "error" && (
                                        <p className="text-red-400 text-center text-sm mt-2 font-medium">
                                            {errorMessage}
                                        </p>
                                    )}

                                    <p className="text-center text-xs text-slate-500 mt-4">
                                        Sin riesgos | Sin tarjeta de crédito requerida
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
