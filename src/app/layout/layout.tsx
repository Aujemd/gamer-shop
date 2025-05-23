import type { ReactNode } from "react";

import { Footer, Header } from "@/app/layout/index";

type LayoutProps = Readonly<{
    children: ReactNode;
}>;

/**
 * Layout component for the application.
 * @param props - The component props.
 * @returns The layout component.
 */
export default function Layout(props: LayoutProps) {
    const { children } = props;
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
}
