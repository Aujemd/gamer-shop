import type { HTMLAttributes } from "react";

import type { Game } from "@/utils/endpoint";

import { AtButton, MlProductCard, OrProduct } from "@/shared";

type CatalogProductsProps = {
    products: Game[];
} & Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>; ;

/**
 * CatalogProducts component.
 * Displays a list of products in a catalog format.
 * @param props - The properties for the component.
 * @returns The CatalogProducts component.
 */
export default function CatalogProducts(props: CatalogProductsProps) {
    const { products, ...rest } = props;
    return (
        <section
            {...rest}
        >
            <div className="max-w-desktop mx-auto">
                <OrProduct className="pb-0">
                    {products.map(product => (
                        <li key={product.id} className="h-full">
                            <MlProductCard {...product} className="h-full" />
                        </li>
                    ))}
                </OrProduct>
                <div className="px-6 md:px-0 pb-8 md:pb-12">
                    <AtButton
                        aria-label="See More Products"
                        className="py-4 uppercase text-white bg-cta-fill-primary text-sm w-full md:w-auto md:py-5 md:px-6 md:text-base"
                    >
                        See More
                    </AtButton>
                </div>
            </div>
        </section>
    );
}
