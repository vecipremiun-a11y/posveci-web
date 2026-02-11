import {
    ShoppingCart,
    Layers,
    Users,
    BarChart3,
    CreditCard,
    RefreshCcw,
    Truck,
    Monitor
} from "lucide-react";
import Image from "next/image";

// Update features array with cleaner paths
const features = [
    {
        title: "Punto de Venta Rápido y Sencillo",
        description: "Vende más rápido con una interfaz intuitiva y fácil de usar. Mantén las ofertas visibles, atiende múltiples clientes a la vez y gestiona tu caja en tiempo real.",
        icon: ShoppingCart,
        image: "/images/pos.png",
        details: [
            "Ventas rápidas y sencillas",
            "Ofertas siempre visibles",
            "Múltiples clientes simultáneos",
            "Control de caja en tiempo real"
        ],
        gradient: "from-cyan-500/20 to-blue-500/20",
        border: "group-hover:border-cyan-500/50"
    },
    {
        title: "Inventario en Tiempo Real",
        description: "Gestiona y actualiza tu inventario de forma automática. Cambia precios, crea ofertas, y visualiza costos y márgenes de utilidad al instante.",
        icon: Layers,
        image: "/images/Inventario en Tiempo Real.png",
        details: [
            "Actualización automática",
            "Gestión de precios y ofertas",
            "Cálculo de utilidad automático",
            "Toda la información a la vista"
        ],
        gradient: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-purple-500/50"
    },
    {
        title: "Ventas a Crédito y Acumulación de Puntos",
        description: "Ofrece ventas a crédito y acumula puntos por compras. Gestiona el historial de pedidos, realiza devoluciones y envía comprobantes por WhatsApp.",
        icon: Users,
        image: "/images/Ventas a Crédito.png",
        details: [
            "Sistema de créditos y puntos",
            "Historial de ventas instantáneo",
            "Anulaciones y devoluciones",
            "Envío de comprobantes por WhatsApp"
        ],
        gradient: "from-amber-500/20 to-orange-500/20",
        border: "group-hover:border-amber-500/50"
    },
    {
        title: "Reportes Detallados y Pedidos Inteligentes",
        description: "Panel de control con ventas diarias/mensuales, productos más vendidos y alertas de stock. Recibe recomendaciones de pedidos inteligentes por proveedor.",
        icon: BarChart3,
        image: "/images/dashboard.png",
        details: [
            "Reportes de ventas y caja",
            "Productos más vendidos y sin stock",
            "Alertas de vencimiento",
            "Pedidos sugeridos por proveedor"
        ],
        gradient: "from-emerald-500/20 to-green-500/20",
        border: "group-hover:border-emerald-500/50"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden bg-[#050511]">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen animate-float" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen animate-float-delayed" />

            {/* Stars/Grid Overlay (Optional) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Descubre todas las funcionalidades de POSVECI.
                    </h2>
                    <p className="text-lg text-slate-400">
                        Maximiza la eficiencia de tu negocio con nuestro sistema POS todo-en-uno.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
    return (
        <div className={`
            group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl 
            transition-all duration-500 hover:border-transparent hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]
        `}>
            {/* Hover Gradient Border Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${feature.gradient} pointer-events-none`} />
            <div className="absolute inset-[1px] bg-[#0A0A15] rounded-[23px] z-0" />

            <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 text-white`}>
                            <feature.icon size={28} className="text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {feature.title}
                        </h3>
                    </div>
                </div>

                {/* Screenshot Area */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-cyan-500/30 transition-colors bg-slate-800/50">
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A15] via-transparent to-transparent opacity-60" />
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                    {feature.description}
                </p>

                <ul className="mt-auto space-y-3">
                    {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                            <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
