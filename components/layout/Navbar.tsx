import Link from "next/link";
import Container from "./Container";

const navItems = [
    { name: "Services", href: "/services" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/80">
            <Container>
                <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
                    {/* Brand */}
                    <Link
                        href="/"
                        className="shrink-0 font-semibold text-base tracking-tight text-slate-900 dark:text-slate-50 sm:text-lg transition-colors hover:text-slate-700 dark:hover:text-slate-300 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                    >
                        FBT
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="shrink-0 rounded-lg bg-slate-900 dark:bg-slate-50 px-3 py-2.5 text-sm font-medium text-white dark:text-slate-900 min-h-[44px] flex items-center justify-center transition-colors hover:bg-slate-800 dark:hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 sm:px-4"
                    >
                        <span className="hidden whitespace-nowrap sm:inline">Start a Conversation</span>
                        <span className="whitespace-nowrap sm:hidden">Contact</span>
                    </Link>
                </div>
            </Container>
        </header>
    );
}
