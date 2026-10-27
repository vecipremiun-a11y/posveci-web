import Link from "next/link";
import { Store } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Logo({ showTagline = true, className }: { showTagline?: boolean; className?: string }) {
    return (
        <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="POSVECI, ir al inicio">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <Store size={20} strokeWidth={2.2} aria-hidden="true" />
                <span className="absolute -bottom-1 -left-1 h-4 w-4 rounded-md border-2 border-white bg-leaf" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
                <span className="text-2xl font-extrabold tracking-tight text-navy">POSVECI</span>
                {showTagline && (
                    <span className="mt-1 whitespace-nowrap text-[11px] font-medium text-muted">Sistema para tu minimarket</span>
                )}
            </span>
        </Link>
    );
}
