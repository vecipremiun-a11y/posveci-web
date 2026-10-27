import Image from "next/image";
import { Check, Package, ShoppingCart, Smartphone, Truck, UserCog, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    { icon: ShoppingCart, title: "Ventas", detail: "y caja", tint: "text-brand" },
    { icon: Package, title: "Inventario", detail: "en tiempo real", tint: "text-leaf" },
    { icon: Truck, title: "Pedidos", detail: "a proveedores", tint: "text-brand" },
    { icon: Users, title: "Clientes", detail: "e historial", tint: "text-brand" },
    { icon: UserCog, title: "Usuarios", detail: "y permisos", tint: "text-brand" },
    { icon: Smartphone, title: "Acceso", detail: "desde tu celular", tint: "text-leaf" },
];

export default function Features() {
    return (
        <section id="features" className="pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid overflow-hidden rounded-[2rem] bg-surface lg:grid-cols-2">
                    <div className="p-6 sm:p-10 lg:p-12">
                        <h2 className="max-w-md text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                            Todo tu negocio en un solo sistema
                        </h2>
                        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                            {features.map((item) => (
                                <li key={item.title} className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 sm:p-5">
                                    <item.icon size={30} strokeWidth={2} className={cn(item.tint)} aria-hidden="true" />
                                    <span className="text-[15px] leading-snug text-navy">
                                        <span className="block font-semibold">{item.title}</span>
                                        <span className="block text-ink">{item.detail}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative aspect-[1374/1145] lg:aspect-auto">
                        <Image
                            src="/images/landing/almacen-pos.webp"
                            alt="Vendedora de minimarket mostrando POSVECI en el computador y el celular"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-[50%_25%]"
                        />
                        <div className="absolute bottom-3 right-3 flex items-center gap-2.5 rounded-2xl bg-white/95 px-3 py-2 shadow-lg shadow-navy/10 sm:bottom-auto sm:right-8 sm:top-10 sm:gap-3 sm:px-5 sm:py-4">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf text-white sm:h-10 sm:w-10">
                                <Check size={20} strokeWidth={3} aria-hidden="true" />
                            </span>
                            <span>
                                <span className="block font-bold text-navy">Venta registrada</span>
                                <span className="block text-sm text-ink">Stock actualizado</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
