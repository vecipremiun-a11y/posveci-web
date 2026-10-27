"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonStyles } from "@/components/ui/Button";
import Logo from "@/components/Logo";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Funciones", href: "/#features" },
    { name: "Planes", href: "/#planes" },
    { name: "Contacto", href: "/contact" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 border-b bg-white/95 backdrop-blur-md transition-all duration-300",
                scrolled ? "border-line py-3 shadow-sm shadow-navy/5" : "border-transparent py-4"
            )}
        >
            <div className="container mx-auto flex items-center justify-between gap-6 px-4 md:px-6">
                <Logo />

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = link.href === pathname;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative py-2 text-[15px] font-medium transition-colors hover:text-brand",
                                    isActive
                                        ? "text-navy font-semibold after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand"
                                        : "text-ink"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center gap-3 whitespace-nowrap xl:ml-0 ml-auto">
                    <Link href="https://app.posveci.com/login" className={buttonStyles("outline", "md")}>
                        Iniciar sesión
                    </Link>
                    <Link href="/demo" className={buttonStyles("primary", "md")}>
                        Solicitar demo
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden rounded-lg p-2 text-navy hover:bg-surface"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="xl:hidden absolute top-full left-0 right-0 border-b border-line bg-white px-4 pb-6 pt-2 shadow-lg shadow-navy/5">
                    <div className="flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="border-b border-line py-3.5 font-medium text-navy hover:text-brand"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:hidden">
                        <Link href="https://app.posveci.com/login" className={buttonStyles("outline", "lg")}>
                            Iniciar sesión
                        </Link>
                        <Link href="/demo" className={buttonStyles("primary", "lg")} onClick={() => setIsOpen(false)}>
                            Solicitar demo
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
