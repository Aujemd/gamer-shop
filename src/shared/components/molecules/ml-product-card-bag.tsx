import type { HTMLAttributes } from "react";

import type { Game } from "@/utils/endpoint";

import { formatCurrency } from "@/shared";

type MlProductCardBag = {
    games: Game[];
} & Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * MlProductCardBag component for the application.
 * @param props - The component props.
 * @returns The product card component.
 */
export default function MlProductCardBag(props: MlProductCardBag) {
    const { className = "", games, ...rest } = props;

    const totalItems = games.length;
    const orderTotal = games.reduce((acc, game) => acc + game.price, 0);
    const formattedTotal = formatCurrency(orderTotal);

    return (
        <section
            className={`font-archivo border-half border-stroke-secondary rounded-lg py-6 px-4 md:py-8 md:px-6 ${className}`}
            aria-labelledby="order-summary-title"
            {...rest}
        >
            <div className="space-y-3">
                <h3
                    className="font-bold text-xl leading-6 tracking-sm md:text-2xl md:leading-7"
                    id="order-summary-title"
                >
                    Order Summary
                </h3>
                <h4 className="font-normal text-lg leading-6 tracking-sm">
                    {totalItems}
                    items
                </h4>
            </div>

            <ul className="border-b border-stroke-secondary pb-6 space-y-3 pt-11 md:pt-13">
                {games.map(({ id, name, price }) => (
                    <li key={id} className="flex items-center justify-between gap-0.5">
                        <p className="font-normal text-lg leading-6 tracking-sm">{name}</p>
                        <data
                            className="font-normal text-lg leading-6 tracking-sm"
                            value={price}
                            aria-label={`Price for ${name}: ${formatCurrency(price)}`}
                        >
                            {formatCurrency(price)}
                        </data>
                    </li>
                ))}
            </ul>

            <div className="mt-6 mb-5 flex items-center justify-between gap-0.5">
                <h4 className="font-bold text-xl leading-6 tracking-sm">Order Total</h4>
                <data
                    value={orderTotal}
                    className="font-bold text-xl leading-6 tracking-sm"
                    aria-label={`Order total: ${formattedTotal}`}

                >
                    {formattedTotal}
                </data>
            </div>

        </section>
    );
}
