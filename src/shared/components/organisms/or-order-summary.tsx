import type { HTMLAttributes } from "react";

import type { Game } from "@/utils/endpoint";

import { AtButton, MlProductCardBag } from "@/shared";

type OrOrderSummaryProps = {
    games: Game[];
} & Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * Order summary component.
 * Displays a summary of the order with a checkout button.
 * @param props - The component props.
 * @returns The order summary component.
 */
export default function OrOrderSummary(props: OrOrderSummaryProps) {
    const { games, className = "", ...rest } = props;
    return (
        <section className={`space-y-10 md:space-y-8 ${className}`} {...rest}>
            <MlProductCardBag
                games={games}
            />
            <AtButton className=" bg-cta-fill-primary w-full text-white py-4">Checkout</AtButton>
        </section>
    );
}
