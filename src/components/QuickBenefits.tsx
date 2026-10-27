import { ChartColumn, Package, ShoppingCart, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
    { icon: ShoppingCart, title: "Caja rápida", desc: "Vende en segundos", tint: "bg-brand-soft text-brand" },
    { icon: Package, title: "Control de stock", desc: "Siempre actualizado", tint: "bg-mint text-leaf-dark" },
    { icon: ChartColumn, title: "Reportes claros", desc: "Conoce tus ventas", tint: "bg-brand-soft text-brand" },
    { icon: Users, title: "Créditos y puntos", desc: "Fideliza a tus clientes", tint: "bg-brand-soft text-brand" },
];

export default function QuickBenefits() {
    return (
        <section aria-label="Beneficios principales" className="pb-16">
            <div className="container mx-auto px-4 md:px-6">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-6 xl:grid-cols-4 xl:divide-x xl:divide-line">
                    {benefits.map((item) => (
                        <li key={item.title} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 xl:justify-center xl:px-4">
                            <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl", item.tint)}>
                                <item.icon size={26} strokeWidth={2} aria-hidden="true" />
                            </span>
                            <span>
                                <span className="block font-bold text-navy">{item.title}</span>
                                <span className="block text-sm text-ink">{item.desc}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
