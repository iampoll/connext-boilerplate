import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "@/components/convex-provider";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/connext.svg",
                href: "/connext.svg",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/connext-dark.svg",
                href: "/connext-dark.svg",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ConvexClientProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </ConvexClientProvider>
            </body>
        </html>
    );
}
