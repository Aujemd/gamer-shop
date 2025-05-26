import type { HTMLAttributes } from "react";

import Image from "next/image";

import type { Game } from "@/utils/endpoint";

import { AtButton, formatCurrency } from "@/shared";

type MlProductCard = Game & Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * MlProductCard component for the application.
 * @param props - The component props.
 * @returns The product card component.
 */
export default function MlProductCard(props: MlProductCard) {
    const { className = "", ...productData } = props;
    const { id, genre, image, name, price, isNew, ...rest } = productData;

    return (
        <article
            className={`p-6 space-y-5 border-half border-stroke-secondary rounded-2xl ${className}`}
            {...rest}
        >
            <div className="relative h-60">
                <Image
                    src={image}
                    alt={name}
                    className="object-cover rounded-t-2xl"
                    fill
                    data-testid={`ml-product-card-image-test-id-${id}`}

                />
                {
                    isNew && (
                        <span
                            className="absolute top-3 left-3 bg-stone-100 text-gray-medium px-3 py-2 rounded-sm text-center capitalize tracking-sm leading-4 text-base font-archivo font-normal"
                            aria-label="New Product"
                            data-testid={`ml-product-card-is-new-label-test-id-${id}`}
                        >
                            New
                        </span>
                    )
                }

            </div>

            <div className="space-y-3">
                <span
                    className="uppercase font-archivo font-bold text-base leading-4 text-neutral-500 tracking-normal block"
                    data-testid={`ml-product-card-genre-test-id-${id}`}
                >
                    {genre}
                </span>
                <div className="flex items-center justify-between font-archivo font-bold tracking-sm text-gray-medium">
                    <h2
                        className="inline text-lg leading-5 whitespace-nowrap text-ellipsis overflow-hidden"
                        data-testid={`ml-product-card-name-test-id-${id}`}
                    >
                        {name}
                    </h2>
                    <span
                        className="inline text-xl leading-6 text-center"
                        data-testid={`ml-product-card-price-test-id-${id}`}
                    >
                        {formatCurrency(price)}
                    </span>
                </div>
            </div>
            <AtButton
                className="py-5 w-full border border-gray-medium uppercase hover:bg-gray-medium hover:text-white cursor-pointer transition-colors"
                aria-label={`add ${name} to cart`}
                data-testid={`ml-product-card-button-${id}`}
            >
                ADD TO CART
            </AtButton>
        </article>
    );
}
