import type { PropsWithChildren } from "react";

import { Footer, Header } from "@/app/layout/index";

type LayoutProps = Readonly<PropsWithChildren>;

/**
 * Layout component for the application.
 * @param props - The component props.
 * @returns The layout component.
 */
export default function Layout(props: LayoutProps) {
    const { children } = props;
    return (
        <main>
            <Header data-testid="layout-header-test-id" />
            {children}
            <Footer data-testid="layout-footer-test-id" />
        </main>
    );
}
