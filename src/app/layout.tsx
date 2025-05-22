import type { Metadata } from "next";

import { archivo, area } from "@/app/fonts";
import { Layout } from "@/app/layout/index";

import "../css/global.css";

export const metadata: Metadata = {
    title: "Apply Digital Test",
    description: "Frontend development test for Apply Digital",
};

/**
 * Root layout for the application.
 * This layout wraps all pages and provides a consistent structure.
 * @param props - The component props.
 * @param props.children - The child components to be rendered within this layout.
 * @returns The root layout component.
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${archivo.variable} ${area.variable}`}>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
