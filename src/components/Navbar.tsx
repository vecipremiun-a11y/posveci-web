"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Funcionalidades", href: "/#features" },
        { name: "Opiniones", href: "/#testimonials" },
        { name: "Contacto", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-[#050511]/80 backdrop-blur-md border-[rgba(255,255,255,0.08)] py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    POS<span className="text-cyan-400">VECI</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="https://app.posveci.com/login">
                        <Button variant="primary" size="sm">
                            Iniciar Sesión
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#050511] border-b border-white/10 p-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block text-slate-300 hover:text-cyan-400 font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="https://app.posveci.com/login" className="w-full">
                        <Button variant="primary" className="w-full">
                            Iniciar Sesión
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
