import { ChevronRight, Laptop, ScanBarcode, ShoppingCart } from "lucide-react";

const steps = [
    { title: "Crea tu cuenta", detail: "en minutos", icon: Laptop },
    { title: "Configura tus productos", detail: "precios, costos y stock", icon: ScanBarcode },
    { title: "Comienza a vender", detail: "y controla tu negocio", icon: ShoppingCart },
];

export default function Steps() {
    return (
        <section id="pasos" className="pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Empieza en 3 pasos</h2>
                <ol className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-4">
                    {steps.map((step, index) => (
                        <li key={step.title} className="flex flex-1 items-center gap-4">
                            {index > 0 && (
                                <ChevronRight size={28} className="hidden shrink-0 text-line lg:block" aria-hidden="true" />
                            )}
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                                {index + 1}
                            </span>
                            <span className="flex-1">
                                <span className="block font-bold text-navy">{step.title}</span>
                                <span className="block text-sm text-ink">{step.detail}</span>
                            </span>
                            <step.icon size={40} strokeWidth={1.6} className="shrink-0 text-brand/70" aria-hidden="true" />
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
