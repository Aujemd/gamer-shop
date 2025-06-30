"use client";
import type { JSX } from "react";

import { CartHeader } from "@/cart";
import { useStoredCart } from "@/cart/hooks";
import { ArrowLeft } from "@/icons";
import { AtLink, MlCardBasketMemo, OrOrderSummary } from "@/shared";
import { useClient } from "@/shared/hooks";
/**
 * Cart page component of the application.
 * @returns The cart page component.
 */
export default function Cart(): JSX.Element {
    const { cartItems, removeItemFromCart } = useStoredCart();

    const cartItemsCount = cartItems.length ?? 0;

    const isClient = useClient();

    return (
        <div className="max-w-desktop mx-auto">
            <AtLink
                href="/"
                aria-label="Back to Catalog"
                className="text-gray-medium flex items-center gap-2 py-4 px-6 xl:py-6 xl:px-0"
            >
                <ArrowLeft />
                Back to Catalog
            </AtLink>
            {
                isClient && (
                    <>

                        <CartHeader cartItemsCount={cartItemsCount} />
                        <div className="space-y-12 px-6 pb-8 md:space-y-0 md:flex  md:gap-20  xl:px-0 xl:pb-12">
                            <ul className="w-full">
                                {cartItems.map((product, index) => (
                                    <li key={product.id}>
                                        <MlCardBasketMemo
                                            {...product}
                                            index={index}
                                            className={cartItems.length === index + 1 ? "border-none" : ""}
                                            onRemoveButtonClick={() => removeItemFromCart(product.id)}
                                        />
                                    </li>
                                ))}
                            </ul>
                            <OrOrderSummary
                                className="w-full md:max-w-[522px]"
                                games={cartItems}
                            />
                        </div>
                    </>
                )
            }

        </div>
    );
}
