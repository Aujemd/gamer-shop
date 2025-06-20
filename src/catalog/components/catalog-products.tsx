"use client";
import type { HTMLAttributes } from "react";

import { useStoredCart } from "@/cart/hooks";
import { useCatalog } from "@/catalog";
import { AtButton, MlProductCard, OrProduct } from "@/shared";

type CatalogProductsProps = Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>; ;

/**
 * CatalogProducts component.
 * Displays a list of products in a catalog format.
 * @param props - The properties for the component.
 * @returns The CatalogProducts component.
 */
export default function CatalogProducts(props: CatalogProductsProps) {
    const { ...rest } = props;

    const { totalPages, currentPage, games: products } = useCatalog();

    const showMoreButton = totalPages > 1 && currentPage < totalPages;

    const { addItemToCart, isItemInCart, removeItemFromCart } = useStoredCart();

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
