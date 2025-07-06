import type { HTMLAttributes } from "react";

import Link from "next/link";

import { CartIcon } from "@/icons";

type OrHeaderProps = Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * OrHeader component for the application.
 * @param props - The component props.
 * @returns The header component.
 */
export default function OrHeader(props: OrHeaderProps) {
    const { className = "", ...rest } = props;
    return (
        <header {...rest} className={`bg-surface-secondary ${className}`}>
            <div className="px-6 py-5 flex items-center justify-between text-cta-fill-primary lg:max-w-desktop mx-auto xl:px-0">
                <h1 className="font-area font-bold text-2xl leading-6 text-center tracking-sm">
                    <Link
                        href="/"
                        data-testid="or-header-logo-link-test-id"
                    >
                        GamerShop
                    </Link>
                </h1>
                <Link
                    href="/cart"
                    aria-label="View shopping cart"
                    data-testid="or-header-cart-link-test-id"
                >
                    <CartIcon
                        data-testid="or-header-cart-icon-test-id"
                    />
                </Link>

            </div>

        </header>
    );
}
