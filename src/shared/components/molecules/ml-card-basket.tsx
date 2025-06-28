import type { HTMLAttributes } from "react";

import Image from "next/image";
import { memo } from "react";

import type { Game } from "@/utils/endpoint";

import { XMark } from "@/icons";
import { formatCurrency } from "@/shared";

type MlCardBasket = Game & { onRemoveButtonClick: () => void } & Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * MlCardBasket component for the application.
 * @param props - The component props.
 * @returns The product card component.
 */
export default function MlCardBasket(props: MlCardBasket) {
    const { className = "", onRemoveButtonClick, ...productData } = props;
    const { id, genre, image, name, price, isNew, description, ...rest } = productData;

    return (
        <article
            className={`py-5 px-4 border-b-half border-stroke-secondary space-y-4 md:flex md:space-y-0 md:gap-6 md:items-start ${className}`}
            {...rest}
        >
            <div className="flex gap-3 w-full items-start md:max-w-3xs">
                <div className="relative h-ml-card-basket-sm-height md:h-ml-card-basket-lg-height w-full flex-1">
                    <Image
                        src={image}
                        alt={name}
                        className="object-cover"
                        fill
                        data-testid={`ml-card-basket-image-test-id-${id}`}
                    />
                </div>
                <button
                    type="button"
                    aria-label="Remove Product from Basket"
                    className="cursor-pointer md:hidden md:pointer-events-none"
                    data-testid={`ml-card-basket-remove-button-mobile-test-id-${id}`}
                    onClick={onRemoveButtonClick}
                >
                    <XMark className="text-stroke-secondary" />
                </button>
            </div>

            <div className="font-archivo w-full md:py-2">
                <span
                    className="mb-3 font-bold text-sm leading-4 tracking-normal text-neutral-500 uppercase block"
                    data-testid={`ml-card-basket-genre-test-id-${id}`}
                >
                    {genre}
                </span>
                <div className="space-y-2 mb-6 md:mb-5">
                    <h2
                        className="font-bold text-lg leading-5 tracking-sm text-gray-medium"
                        data-testid={`ml-card-basket-name-test-id-${id}`}
                    >
                        {name}
                    </h2>
                    {description && <p className="font-normal text-base leading-5 tracking-normal text-neutral-500 " data-testid={`ml-card-basket-description-test-id-${id}`}>{description}</p>}
                </div>
                <data
                    className="w-full block text-right font-archivo font-bold text-lg leading-5 text-gray-medium tracking-sm pt-5"
                    value={price}
                    data-testid={`ml-card-basket-price-test-id-${id}`}
                >
                    {formatCurrency(price)}
                </data>
            </div>

            <button
                type="button"
                aria-label="Remove Product from Basket"
                className="md:cursor-pointer hidden pointer-events-none md:pointer-events-auto md:inline-block"
                data-testid={`ml-card-basket-remove-button-desktop-test-id-${id}`}
                onClick={onRemoveButtonClick}
            >
                <XMark className="text-stroke-secondary" />
            </button>
        </article>
    );
}

/**
 * Compares the previous and next props of the MlCardBasket component.
 * This function is used to determine if the component should re-render.
 * It checks if the id of the previous props is equal to the id of the next props.
 * If they are equal, it returns true, indicating that the component should not re-render.
 * If they are not equal, it returns false, indicating that the component should re-render.
 * @param prevProps - The previous props of the component.
 * @param nextProps - The next props of the component.
 * @returns - Returns true if the props are equal, false otherwise.
 */
export function isEqual(prevProps: MlCardBasket, nextProps: MlCardBasket) {
    return (
        prevProps.id === nextProps.id
    );
}
export const MlCardBasketMemo = memo(MlCardBasket, isEqual);
