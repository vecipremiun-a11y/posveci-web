import { ShieldCheck, Zap, BarChart3, Store, Smartphone, RefreshCw } from "lucide-react";

const reasons = [
    {
        icon: ShieldCheck,
        title: "Seguridad y Control Total",
        description: "Gestione usuarios, permisos y roles de forma avanzada y auditada.",
        color: "text-cyan-400",
    },
    {
        icon: Zap,
        title: "Velocidad Real de Venta",
        description: "Interfaz optimizada para procesar ventas en milisegundos sin esperas.",
        color: "text-blue-400",
    },
    {
        icon: BarChart3,
        title: "Reportes Claros y Útiles",
        description: "Tome decisiones basadas en datos reales y estadísticas detalladas.",
        color: "text-indigo-400",
    },
    {
        icon: Store,
        title: "Adaptado a tu Negocio",
        description: "Configuración flexible para minimarkets, botillerías, carnicerías y más.",
        color: "text-purple-400",
    },
    {
        icon: Smartphone,
        title: "Acceso desde Cualquier Lugar",
        description: "Monitoree su negocio desde su celular o tablet en tiempo real.",
        color: "text-pink-400",
    },
    {
        icon: RefreshCw,
        title: "Actualizaciones Constantes",
        description: "Mejoras continuas y nuevas funcionalidades sin costo adicional.",
        color: "text-emerald-400",
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-20 bg-gradient-to-b from-[#050511] to-[#0a0f1e] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        ¿Por qué elegir <span className="text-cyan-400">POSVECI</span>?
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300"
                        >
                            <div className={`p-4 rounded-full bg-white/5 mb-6 ${reason.color} ring-1 ring-white/10`}>
                                <reason.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                            <p className="text-slate-400">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
