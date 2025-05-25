import type { HTMLAttributes } from "react";

import Link from "next/link";

import { LogoIcon } from "@/icons";

type OrFooterProps = Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * OrFooter component for the application.
 * @param props - The component props.
 * @returns The footer component.
 */
export default function OrFooter(props: OrFooterProps) {
    const { className = "", ...rest } = props;
    return (
        <footer {...rest} className={`bg-neutral-700 py-16 flex justify-center items-center ${className}`}>
            <Link
                href="/"
                data-testid="or-footer-logo-link-test-id"
            >
                <LogoIcon
                    data-testid="or-footer-logo-icon-test-id"
                />
            </Link>
        </footer>
    );
}
