import type { ReactNode } from "react";

import Header from "@/app/layout/header";

type LayoutProps = Readonly<{
    children: ReactNode;
}>;

/**
 * Layout component for the application.
 * @param root0 - The component props.
 * @param root0.children - The child components to be rendered within this layout.
 * @returns The layout component.
 */
export default function Layout({ children }: LayoutProps) {
    return (
        <main>
            <Header />
            {children}
        </main>
    );
}
