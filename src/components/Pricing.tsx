"use client";

import { useState } from "react";
import { Building2, Check, CreditCard, FileText, Globe, Package, Scale, ShoppingCart, Store } from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Standard",
        monthly: "$15.000",
        yearly: "$140.000",
        intro: "Todo lo que necesitas para ordenar tu negocio",
        features: [
            "Punto de venta, clientes e historial",
            "Inventario completo",
            "Facturación electrónica SII",
            "Reportes de ventas y de cajas",
            "Todo ilimitado",
        ],
        highlight: false,
    },
    {
        name: "Profesional",
        monthly: "$30.000",
        yearly: "$270.000",
        intro: "Todo lo del plan Standard +",
        features: [
            "Ventas offline y órdenes de compra",
            "Personal y administración financiera",
            "Sorteos, combos y perfil de producto",
            "Reportes avanzados",
            "Marketplace + sucursales adicionales",
            "Soporte prioritario 24/7",
        ],
        highlight: true,
    },
];

const integrations = [
    { icon: ShoppingCart, label: "POS", desc: "Ventas rápidas" },
    { icon: Package, label: "Inventario", desc: "Stock en tiempo real" },
    { icon: FileText, label: "SII", desc: "Boleta y Factura" },
    { icon: CreditCard, label: "Medios de Pago", badge: "Próximamente" },
    { icon: Scale, label: "Balanzas", badge: "Próximamente" },
    { icon: Globe, label: "Tienda Online", desc: "Web integrada" },
];

export default function Pricing() {
    const [billing, setBilling] = useState<"mensual" | "anual">("mensual");

    return (
        <section id="planes" className="pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="rounded-[2rem] bg-surface p-6 sm:p-10 lg:p-12">
                    <div className="grid gap-10 lg:grid-cols-[0.75fr_2fr] lg:gap-12">
                        <div>
                            <span className="inline-flex rounded-lg bg-mint px-3 py-1.5 text-xs font-bold tracking-wide text-leaf-dark">
                                PLANES SIMPLES
                            </span>
                            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                                Elige el plan ideal para tu minimarket
                            </h2>
                            <p className="mt-4 text-ink">Prueba 30 días gratis. Precios en CLP por sucursal.</p>
                        </div>

                        <div>
                            {/* Toggle Mensual / Anual */}
                            <div className="mb-6 flex lg:justify-end">
                                <div role="group" aria-label="Periodo de pago" className="inline-flex items-center gap-1 rounded-xl border border-line bg-white p-1">
                                    <button
                                        onClick={() => setBilling("mensual")}
                                        aria-pressed={billing === "mensual"}
                                        className={cn(
                                            "rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors",
                                            billing === "mensual" ? "bg-brand text-white" : "text-navy hover:bg-surface"
                                        )}
                                    >
                                        Mensual
                                    </button>
                                    <button
                                        onClick={() => setBilling("anual")}
                                        aria-pressed={billing === "anual"}
                                        className={cn(
                                            "flex flex-col items-center rounded-lg px-6 py-1.5 text-sm font-semibold leading-tight transition-colors",
                                            billing === "anual" ? "bg-brand text-white" : "text-navy hover:bg-surface"
                                        )}
                                    >
                                        Anual
                                        <span className={cn("text-[11px] font-medium", billing === "anual" ? "text-white/85" : "text-leaf-dark")}>
                                            2 meses gratis
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {plans.map((plan) => (
                                    <div
                                        key={plan.name}
                                        className={cn(
                                            "relative flex flex-col rounded-2xl bg-white p-6 sm:p-8",
                                            plan.highlight ? "shadow-xl shadow-navy/5 ring-1 ring-line" : "border-2 border-brand/25"
                                        )}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
                                                    {plan.highlight && (
                                                        <span className="rounded-full bg-leaf px-2.5 py-0.5 text-xs font-bold text-white">Más popular</span>
                                                    )}
                                                </div>
                                                <p className="mt-3 flex items-baseline gap-1.5">
                                                    <span className="text-4xl font-extrabold tracking-tight text-navy">
                                                        {billing === "mensual" ? plan.monthly : plan.yearly}
                                                    </span>
                                                    <span className="text-sm text-muted">{billing === "mensual" ? "/mes" : "/año"}</span>
                                                </p>
                                                <p className="mt-1 text-sm text-muted">
                                                    CLP · {billing === "mensual" ? "por sucursal / mes" : "por sucursal / año"}
                                                </p>
                                            </div>
                                            <span
                                                className={cn(
                                                    "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl",
                                                    plan.highlight ? "bg-mint text-leaf-dark" : "bg-brand-soft text-brand"
                                                )}
                                                aria-hidden="true"
                                            >
                                                <Store size={34} strokeWidth={1.8} />
                                            </span>
                                        </div>

                                        <p className="mt-6 text-sm font-semibold text-navy">{plan.intro}</p>
                                        <ul className="mt-4 flex-1 space-y-3">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2.5 text-[15px] text-ink">
                                                    <Check size={18} strokeWidth={2.6} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {!plan.highlight && (
                                            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy">
                                                <Building2 size={18} className="text-brand" aria-hidden="true" />
                                                SII 100% integrado
                                            </p>
                                        )}

                                        <a
                                            href="https://app.posveci.com/registro"
                                            className={buttonStyles(plan.highlight ? "outline" : "primary", "lg", "mt-6 w-full")}
                                        >
                                            Comenzar prueba gratis
                                        </a>
                                        <p className="mt-3 text-center text-xs text-muted">
                                            30 días gratis · Sin riesgos · Cancela cuando quieras
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Integraciones y compatibilidad */}
                    <div className="mt-12 border-t border-line pt-10">
                        <h3 className="text-center text-lg font-bold text-navy">Integraciones y compatibilidad</h3>
                        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                            {integrations.map((item) => (
                                <li key={item.label} className="flex flex-col items-center rounded-2xl border border-line bg-white p-4 text-center">
                                    <item.icon size={24} className="text-brand" aria-hidden="true" />
                                    <span className="mt-2 text-sm font-semibold text-navy">{item.label}</span>
                                    {item.badge ? (
                                        <span className="mt-0.5 text-[11px] font-bold text-amber-700">{item.badge}</span>
                                    ) : (
                                        <span className="mt-0.5 text-[11px] text-muted">{item.desc}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
