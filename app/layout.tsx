import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next"
export const metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Analytics/>
        <Footer />
        </body>
        </html>
    );
}
