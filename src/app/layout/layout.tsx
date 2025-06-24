import type { PropsWithChildren } from "react";

import { OrFooter, OrHeader } from "@/shared";

type LayoutProps = Readonly<PropsWithChildren>;

/**
 * Layout component for the application.
 * @param props - The component props.
 * @returns The layout component.
 */
export default function Layout(props: LayoutProps) {
    const { children } = props;
    return (
        <>
            <OrHeader data-testid="layout-or-header-test-id" />
            <main className="min-h-screen">
                {children}
            </main>
            <OrFooter data-testid="layout-or-footer-test-id" />
        </>
    );
}
