import Link from "next/link";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Funciones", href: "/#features" },
    { name: "Planes", href: "/#planes" },
    { name: "Contacto", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="border-t border-line bg-white">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
                    <div>
                        <Logo />
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink">
                            Sistema POS para almacenes y minimarkets. Ventas, stock y caja en un solo lugar.
                        </p>
                    </div>

                    <nav aria-label="Pie de página">
                        <h2 className="text-sm font-bold text-navy">Navegación</h2>
                        <ul className="mt-4 space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-ink transition-colors hover:text-brand">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className="text-sm font-bold text-navy">Contacto</h2>
                        <ul className="mt-4 space-y-2.5 text-sm text-ink">
                            <li>
                                <a href="https://wa.me/56950225491" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
                                    WhatsApp +56 9 5022 5491
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@posveci.com" className="inline-flex items-center gap-2 transition-colors hover:text-brand">
                                    <Mail size={16} aria-hidden="true" />
                                    info@posveci.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold text-navy">Clientes</h2>
                        <ul className="mt-4 space-y-2.5 text-sm text-ink">
                            <li>
                                <Link href="https://app.posveci.com/login" className="transition-colors hover:text-brand">Iniciar sesión</Link>
                            </li>
                            <li>
                                <Link href="https://app.posveci.com/registro" className="transition-colors hover:text-brand">Prueba gratis</Link>
                            </li>
                            <li>
                                <Link href="/demo" className="transition-colors hover:text-brand">Solicitar demo</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
                    <p className="text-xs text-muted">&copy; {new Date().getFullYear()} POSVECI. Todos los derechos reservados.</p>
                    <div className="flex gap-2">
                        <Link href="#" aria-label="Instagram" className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-brand"><Instagram size={18} /></Link>
                        <Link href="#" aria-label="Facebook" className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-brand"><Facebook size={18} /></Link>
                        <Link href="#" aria-label="Twitter" className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-brand"><Twitter size={18} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
