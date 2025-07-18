"use client";
import type { HTMLAttributes } from "react";

import { useStoredCart } from "@/cart/hooks";
import { useCatalog } from "@/catalog";
import { LoadingIcon } from "@/icons";
import { AtButton, MlProductCardMemo, OrProduct, useClient } from "@/shared";

type CatalogProductsProps = Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>; ;

/**
 * CatalogProducts component.
 * Displays a list of products in a catalog format.
 * @param props - The properties for the component.
 * @returns The CatalogProducts component.
 */
export default function CatalogProducts(props: CatalogProductsProps) {
    const { ...rest } = props;

    const { totalPages, currentPage, games: products, isLoading, handleGetNextPage } = useCatalog();

    const showMoreButton = totalPages > 1 && currentPage < totalPages && products.length >= 12;

    const { addItemToCart, isItemInCart, removeItemFromCart } = useStoredCart();

    const isClient = useClient();

    return (
        <section
            {...rest}
        >
            <div className="max-w-desktop mx-auto">
                <OrProduct className={showMoreButton ? "pb-0" : ""}>
                    {products.map((product, index) => {
                        const isInCart = isClient && isItemInCart(product.id);
                        return (
                            <li key={product.id} className="h-full">
                                <MlProductCardMemo
                                    {...product}
                                    index={index}
                                    className="h-full"
                                    buttonLabel={isInCart ? "Remove" : "Add to Cart"}
                                    onButtonClick={() => {
                                        isInCart ? removeItemFromCart(product.id) : addItemToCart(product);
                                    }}
                                    data-testid={`catalog-products-ml-product-card-${product.id}-test-id`}
                                />
                            </li>
                        );
                    })}
                </OrProduct>
                {isLoading && <LoadingIcon className="w-8 fill-cta-fill-primary mx-auto my-6" />}
                {
                    showMoreButton
                    && (
                        <div className="px-6 xl:px-0 pb-8 xl:pb-12">
                            <AtButton
                                onClick={handleGetNextPage}
                                aria-label="See More Products"
                                className="py-4 uppercase text-white bg-cta-fill-primary text-sm w-full md:w-auto md:py-5 md:px-6 md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                data-testid="catalog-products-see-more-button-test-id"
                                disabled={currentPage >= totalPages || isLoading}
                            >
                                See More
                            </AtButton>
                        </div>
                    )
                }
            </div>
        </section>
    );
}
