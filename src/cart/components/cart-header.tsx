import type { HTMLAttributes } from "react";

import { AtPageTitle } from "@/shared";

type CartHeaderProps = Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * CartHeader component.
 * Displays the top section of the cart page.
 * @param props - The component props.
 * @returns The cart header component.
 */
export default function CartHeader(props: CartHeaderProps) {
    const { className = "", ...rest } = props;

    return (
        <section {...rest} className={`py-8 px-6 space-y-3 xl:px-0 xl:py-12 ${className}`}>
            <AtPageTitle data-testid="catalog-header-at-page-title-test-id" className="text-left">
                Your Cart
            </AtPageTitle>
            <p
                className="font-archivo font-norma text-xl leading-6 tracking-sm lg:text-2xl lg:leading-7"
                data-testid="cart-header-items-count-test-id"
            >
                3 items
            </p>
        </section>
    );
}
