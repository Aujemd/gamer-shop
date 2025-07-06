"use client";
import type { HTMLAttributes } from "react";

import Image from "next/image";
import { memo } from "react";

import type { Game } from "@/utils/endpoint";

import { AtButton, formatCurrency } from "@/shared";

type MlProductCard = Game & { index?: number; buttonLabel?: string; onButtonClick?: () => void } & Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * MlProductCard component for the application.
 * @param props - The component props.
 * @returns The product card component.
 */
export default function MlProductCard(props: MlProductCard) {
    const { className = "", index = 0, buttonLabel = "Click", onButtonClick, ...productData } = props;
    const { id, genre, image, name, price, isNew, ...rest } = productData;

    return (
        <article
            className={`p-6 space-y-5 border-half border-stroke-secondary rounded-4xl font-archivo ${className}`}
            {...rest}
        >
            <div className="relative h-60">
                <Image
                    src={image}
                    alt={name}
                    className="object-cover rounded-t-2xl"
                    fill
                    data-testid={`ml-product-card-image-test-id-${id}`}
                    sizes="(max-width: 768px) 40vw, (max-width: 1200px) 33vw"
                    priority={index < 3}
                />
                {
                    isNew && (
                        <span
                            className="absolute top-3 left-3 bg-stone-100 text-gray-medium px-3 py-2 rounded-sm text-center capitalize tracking-sm leading-4 text-base font-normal"
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
                    className="uppercase font-bold text-base leading-4 text-neutral-500 tracking-normal block"
                    data-testid={`ml-product-card-genre-test-id-${id}`}
                >
                    {genre}
                </span>
                <div className="flex items-center justify-between font-bold tracking-sm text-gray-medium">
                    <h2
                        className="inline text-lg leading-5 whitespace-nowrap text-ellipsis overflow-hidden"
                        data-testid={`ml-product-card-name-test-id-${id}`}
                    >
                        {name}
                    </h2>
                    <data
                        value={price}
                        className="inline text-xl leading-6 text-center"
                        data-testid={`ml-product-card-price-test-id-${id}`}
                    >
                        {formatCurrency(price)}
                    </data>
                </div>
            </div>
            <AtButton
                onClick={onButtonClick}
                className="py-5 w-full border border-gray-medium uppercase hover:bg-gray-medium hover:text-white cursor-pointer transition-colors"
                aria-label={`add ${name} to cart`}
                data-testid={`ml-product-card-button-${id}`}
            >
                {buttonLabel}
            </AtButton>
        </article>
    );
}

/**
 * Function to compare previous and next props for memoization.
 * This function checks if the id, index, and buttonLabel of the previous and next props
 * are the same, and returns true if they are equal, false otherwise.
 * This is used to prevent unnecessary re-renders of the MlProductCard component.
 * @param prevProps - The previous props of the component.
 * @param nextProps - The next props of the component.
 * @returns - Returns true if the props are equal, false otherwise.
 */
export function isEqual(prevProps: MlProductCard, nextProps: MlProductCard) {
    return prevProps.id === nextProps.id && prevProps.index === nextProps.index && prevProps.buttonLabel === nextProps.buttonLabel;
}
export const MlProductCardMemo = memo(MlProductCard, isEqual);
