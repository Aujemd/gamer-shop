import type { JSX } from "react";

import { CartHeader } from "@/cart";
import { ArrowLeft } from "@/icons";
import { AtLink, MlCardBasket, OrOrderSummary } from "@/shared";
import { allGames } from "@/utils/endpoint";

/**
 * Cart page component of the application.
 * @returns The cart page component.
 */
export default async function Cart(): Promise<JSX.Element> {
    return (
        <div className="max-w-desktop mx-auto">
            <AtLink
                href="/"
                aria-label="Back to Catalog"
                className="text-gray-medium flex items-center gap-2 py-4 px-6 lg:py-6 lg:px-0"
            >
                <ArrowLeft />
                Back to Catalog
            </AtLink>
            <CartHeader />
            <div className="space-y-12 px-6 pb-8 md:space-y-0 md:flex md:p-0 md:gap-20">
                <ul className="w-full">
                    {[allGames[0], allGames[1], allGames[2]].map(product => (
                        <li key={product.id}>
                            <MlCardBasket
                                {...product}

                            />
                        </li>
                    ))}
                </ul>
                <OrOrderSummary
                    className="w-full md:max-w-[522px]"
                    games={[allGames[0], allGames[1], allGames[2]]}
                />
            </div>
        </div>
    );
}
