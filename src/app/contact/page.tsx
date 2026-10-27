"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { User, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";

const inputClass =
    "w-full bg-white border border-line rounded-xl py-3 pl-11 pr-4 text-navy placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
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
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Hubo un error al enviar el mensaje.");
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
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-14">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-brand-soft text-brand text-sm font-semibold mb-4">
                        <Mail className="w-4 h-4 mr-2" />
                        Contáctanos
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy mb-4">
                        Contáctanos
                    </h1>
                    <p className="text-ink text-lg max-w-2xl mx-auto">
                        ¿Tienes preguntas o necesitas ayuda? Completa el formulario o contáctanos directamente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Left Column: Form */}
                    <div className="bg-white p-6 md:p-10 rounded-3xl border border-line shadow-xl shadow-navy/5">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in slide-in-from-bottom-5 duration-500">
                                <div className="w-20 h-20 bg-mint rounded-full flex items-center justify-center mb-6 border border-leaf/30">
                                    <Send className="h-10 w-10 text-leaf-dark" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-2">¡Mensaje Enviado!</h3>
                                <p className="text-ink max-w-xs">
                                    Gracias por contactarnos. Te responderemos lo antes posible.
                                </p>
                                <Button
                                    className="mt-8"
                                    onClick={() => setStatus("idle")}
                                    variant="secondary"
                                >
                                    Enviar otro mensaje
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-name" className="text-sm font-medium text-navy ml-1">Nombre</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-muted" />
                                        </div>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            className={inputClass}
                                            placeholder="Tu nombre completo"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-email" className="text-sm font-medium text-navy ml-1">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-muted" />
                                        </div>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            className={inputClass}
                                            placeholder="tu@correo.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-phone" className="text-sm font-medium text-navy ml-1">Teléfono (opcional)</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-muted" />
                                        </div>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            className={inputClass}
                                            placeholder="+56 9 1234 5678"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="text-sm font-medium text-navy ml-1">Mensaje</label>
                                    <textarea
                                        id="contact-message"
                                        className="w-full bg-white border border-line rounded-xl py-3 px-4 text-navy placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all min-h-[120px] resize-none"
                                        placeholder="¿En qué podemos ayudarte?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>

                                <Button
                                    className="w-full py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Enviando..." : (
                                        <>
                                            Enviar Mensaje
                                            <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>

                                {status === "error" && (
                                    <p className="text-red-600 text-center text-sm font-medium animate-in fade-in">
                                        {errorMessage}
                                    </p>
                                )}
                            </form>
                        )}
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="bg-white p-6 md:p-10 rounded-3xl border border-line shadow-xl shadow-navy/5 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-2xl font-bold text-navy mb-8">
                                Contacta directo
                            </h3>

                            <div className="space-y-4">
                                {/* WhatsApp */}
                                <a href="https://wa.me/56950225491" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-line hover:border-brand/40 hover:bg-white transition-all group">
                                    <div className="p-3 rounded-full bg-mint text-leaf-dark">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted">WhatsApp</p>
                                        <p className="text-navy font-semibold group-hover:text-brand transition-colors">+56 9 5022 5491</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a href="mailto:contact@posveci.com" className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-line hover:border-brand/40 hover:bg-white transition-all group">
                                    <div className="p-3 rounded-full bg-brand-soft text-brand">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted">Email</p>
                                        <p className="text-navy font-semibold group-hover:text-brand transition-colors">contacto@posveci.com</p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-line">
                                    <div className="p-3 rounded-full bg-brand-soft text-brand">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted">Ubicación</p>
                                        <p className="text-navy font-semibold">Iquique, Chile</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-muted text-sm mb-4">Síguenos en redes sociales</p>
                            <div className="flex gap-3">
                                <a href="#" aria-label="Facebook" className="p-3 rounded-xl bg-surface text-ink hover:text-white hover:bg-brand transition-all">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" aria-label="Instagram" className="p-3 rounded-xl bg-surface text-ink hover:text-white hover:bg-brand transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="p-3 rounded-xl bg-surface text-ink hover:text-white hover:bg-brand transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" aria-label="Twitter" className="p-3 rounded-xl bg-surface text-ink hover:text-white hover:bg-brand transition-all">
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
