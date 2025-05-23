import type { HTMLAttributes } from "react";

import Link from "next/link";

import { CartIcon } from "@/icons";

type HeaderProps = Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * Header component for the application.
 * @param props - The component props.
 * @returns The header component.
 */
export default function Header(props: HeaderProps) {
    const { className = "", ...rest } = props;
    return (
        <header {...rest} className={`bg-surface-secondary  ${className}`}>
            <div className="px-6 py-5 flex items-center justify-between text-cta-fill-primary lg:max-w-desktop mx-auto">
                <h1 className="font-area font-bold text-2xl leading-6 text-center tracking-sm">
                    <Link
                        href="/"
                        data-testid="header-logo-link-test-id"
                    >
                        GamerShop
                    </Link>
                </h1>
                <Link
                    href="/cart"
                    data-testid="header-cart-link-test-id"
                >
                    <CartIcon
                        data-testid="header-cart-icon-test-id"
                    />
                </Link>

            </div>

        </header>
    );
}
