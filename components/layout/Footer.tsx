import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/lib/siteConfig";

const navItems = [
    { name: "Services", href: "/services" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 py-12 sm:py-16" role="contentinfo">
            <Container>
                <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                            {siteConfig.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            {siteConfig.tagline}
                        </p>
                    </div>
                    <nav className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6" aria-label="Footer navigation">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-slate-100 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 text-center sm:text-left">
                    <p className="text-xs text-slate-500 dark:text-slate-500 sm:text-sm">
                        © {new Date().getFullYear()} Future Beyond Technology. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
