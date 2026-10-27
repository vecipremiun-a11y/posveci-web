"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { User, Mail, Phone, Store, CheckCircle } from "lucide-react";

const inputClass =
    "w-full bg-white border border-line rounded-xl py-4 pl-12 pr-4 text-navy placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all";
const iconClass =
    "absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-brand transition-colors";

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
        <main className="min-h-screen bg-surface flex items-center justify-center pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6 flex justify-center">
                <div className="w-full max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-5 text-center">
                        Solicita una <span className="text-brand">Demo gratuita</span>
                    </h1>
                    <p className="text-ink text-lg mb-10 text-center">
                        Prueba POSVECI gratis hoy mismo. Accede a nuestra versión demo sin ningún compromiso
                        para explorar todas las funcionalidades del sistema.
                    </p>

                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-line shadow-xl shadow-navy/5">
                        {isSubmitted ? (
                            <div className="text-center animate-in fade-in zoom-in duration-300">
                                <div className="mb-6 p-4 bg-mint border border-leaf/30 rounded-xl inline-block">
                                    <p className="text-leaf-dark font-bold flex items-center gap-2">
                                        <CheckCircle size={20} />
                                        ¡Solicitud enviada! Te contactaremos pronto.
                                    </p>
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-6">
                                    ¡Gracias <span className="text-brand capitalize">{formData.name}</span>!
                                </h3>
                                <p className="text-ink mb-8">
                                    Aquí tienes tus credenciales para acceder a la demo inmediatamente:
                                </p>

                                <div className="bg-surface border border-line rounded-2xl p-6 mb-8 text-left space-y-4">
                                    <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-line">
                                        <span className="text-muted text-sm">Usuario:</span>
                                        <span className="text-brand font-mono font-bold text-lg">vecino</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-line">
                                        <span className="text-muted text-sm">Contraseña:</span>
                                        <span className="text-brand font-mono font-bold text-lg">vecino123</span>
                                    </div>
                                </div>

                                <a
                                    href="https://demo.posveci.com/login?user=vecino&password=vecino123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="w-full py-4 text-lg font-bold">
                                        Iniciar Sesión
                                    </Button>
                                </a>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-navy mb-6 text-center">
                                    Completa el formulario:
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name */}
                                    <div className="space-y-1">
                                        <div className="relative group">
                                            <User className={iconClass} size={20} />
                                            <input
                                                type="text"
                                                placeholder="Nombre"
                                                aria-label="Nombre"
                                                className={inputClass}
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1">
                                        <div className="relative group">
                                            <Mail className={iconClass} size={20} />
                                            <input
                                                type="email"
                                                placeholder="Correo Electrónico"
                                                aria-label="Correo electrónico"
                                                className={inputClass}
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-1">
                                        <div className="relative group">
                                            <Phone className={iconClass} size={20} />
                                            <input
                                                type="tel"
                                                placeholder="Teléfono"
                                                aria-label="Teléfono"
                                                className={inputClass}
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Business */}
                                    <div className="space-y-1">
                                        <div className="relative group">
                                            <Store className={iconClass} size={20} />
                                            <input
                                                type="text"
                                                placeholder="Tu Negocio"
                                                aria-label="Tu negocio"
                                                className={inputClass}
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
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-line bg-white checked:border-brand checked:bg-brand transition-all"
                                                checked={formData.privacy}
                                                onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                                                required
                                            />
                                            <CheckCircle className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" size={14} />
                                        </div>
                                        <label htmlFor="privacy" className="text-sm text-ink cursor-pointer select-none">
                                            Acepto la política de privacidad
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        className="w-full py-4 mt-6 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Enviando..." : "Solicitar Demo Gratis"}
                                    </Button>

                                    {status === "error" && (
                                        <p className="text-red-600 text-center text-sm mt-2 font-medium">
                                            {errorMessage}
                                        </p>
                                    )}

                                    <p className="text-center text-xs text-muted mt-4">
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
