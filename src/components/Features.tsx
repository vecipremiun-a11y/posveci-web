import { Receipt, CheckSquare, Calculator, ClipboardList, Users, BarChart3 } from "lucide-react";

const features = [
    {
        icon: Receipt,
        title: "Gestión de Ventas",
        description: "El sistema más rápido y fácil para procesar ventas.",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
    },
    {
        icon: CheckSquare,
        title: "Control de Inventarios",
        description: "Control en tiempo real e indicación de fechas de vencimiento.",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
    },
    {
        icon: Calculator,
        title: "Gestión de Cajas",
        description: "Aperturas, cierres y movimientos de caja en tiempo real.",
        color: "text-indigo-400",
        bg: "bg-indigo-400/10",
    },
    {
        icon: ClipboardList,
        title: "Gestión de Pedidos",
        description: "Hace pedidos por proveedor y gestiona últimos productos comprados.",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
    },
    {
        icon: Users,
        title: "Gestión de Clientes",
        description: "Controla los datos y compras a crédito de tus clientes.",
        color: "text-pink-400",
        bg: "bg-pink-400/10",
    },
    {
        icon: BarChart3,
        title: "Historial de Ventas",
        description: "Revisa y anula ventas fácilmente. Permite hacer devoluciones.",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Todo lo que tu negocio necesita en un solo sistema
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto rounded-full" />
                </div>

                {/* Marquee Carousel Container */}
                <div className="relative w-full overflow-hidden mask-gradient-x">
                    {/* Gradient Masks (Optional, but adds to premium feel) */}
                    <div className="absolute top-0 bottom-0 left-0 w-20 z-10 bg-gradient-to-r from-[#050511] to-transparent" />
                    <div className="absolute top-0 bottom-0 right-0 w-20 z-10 bg-gradient-to-l from-[#050511] to-transparent" />

                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8">
                        {/* Original Set */}
                        {features.map((feature, index) => (
                            <FeatureCard key={`original-${index}`} feature={feature} />
                        ))}
                        {/* Duplicate Set for Infinite Loop */}
                        {features.map((feature, index) => (
                            <FeatureCard key={`duplicate-${index}`} feature={feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
    return (
        <div className="w-[350px] shrink-0 glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <div className={`p-4 rounded-xl w-fit mb-6 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">
                {feature.description}
            </p>
        </div>
    );
}
