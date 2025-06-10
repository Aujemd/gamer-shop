import type { JSX } from "react";

import { CartHeader } from "@/cart";
import { ArrowLeft } from "@/icons";
import { AtLink, MlProductCardBag } from "@/shared";
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
            {/* <div className="py-8 px-6 md:p-0">
                {allGames.map(product => (
                    <MlCardBasket
                        {...product}
                        key={product.id}

                    />
                ))}
            </div> */}
            <div className="py-8 px-6">
                <MlProductCardBag
                    games={[allGames[0], allGames[1], allGames[2]]}
                />
            </div>
        </div>
    );
}
