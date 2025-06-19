"use client";
import type { HTMLAttributes } from "react";

import type { Game } from "@/utils/endpoint";

import { AtButton, MlProductCard, OrProduct } from "@/shared";
import { useStoredCart } from "@/shared/hooks";

import { useCatalogProducts } from "../hooks";

type CatalogProductsProps = {
    initialProducts: Game[];
    totalPages: number;
    currentPage: number;
} & Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>; ;

/**
 * CatalogProducts component.
 * Displays a list of products in a catalog format.
 * @param props - The properties for the component.
 * @returns The CatalogProducts component.
 */
export default function CatalogProducts(props: CatalogProductsProps) {
    const { initialProducts, totalPages, currentPage, ...rest } = props;

    const showMoreButton = totalPages > 1 && currentPage < totalPages;

    const { addItemToCart, isItemInCart, removeItemFromCart } = useStoredCart();

    const { products, handleGetNextPage } = useCatalogProducts(initialProducts);

    return (
        <section
            {...rest}
        >
            <div className="max-w-desktop mx-auto">
                <OrProduct className="pb-0">
                    {products.map((product, index) => (
                        <li key={product.id} className="h-full">
                            <MlProductCard
                                {...product}
                                index={index}
                                className="h-full"
                                buttonLabel={isItemInCart(product.id) ? "Remove" : "Add to Cart"}
                                onButtonClick={() => {
                                    isItemInCart(product.id) ? removeItemFromCart(product.id) : addItemToCart(product);
                                }}
                                data-testid={`catalog-products-ml-product-card-${product.id}-test-id`}
                            />
                        </li>
                    ))}
                </OrProduct>
                {
                    showMoreButton
                    && (
                        <div className="px-6 md:px-0 pb-8 md:pb-12">
                            <AtButton
                                aria-label="See More Products"
                                className="py-4 uppercase text-white bg-cta-fill-primary text-sm w-full md:w-auto md:py-5 md:px-6 md:text-base"
                                data-testid="catalog-products-see-more-button-test-id"
                                onClick={handleGetNextPage}
                                disabled={currentPage >= totalPages}
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
