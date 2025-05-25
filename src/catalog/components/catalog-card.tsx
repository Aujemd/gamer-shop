// import type { HTMLAttributes } from "react";

import Image from "next/image";

// import type { Game } from "@/utils/endpoint";

// type CatalogCardProps = Game & Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * CatalogCard component.
 * Container for displaying a catalog card item.
 * @returns The catalog card component.
 */
export default function CatalogCard() {
    return (
        <article className="p-6 space-y-5 border border-stroke-secondary rounded-2xl ">
            <div className="relative h-60">
                <Image
                    src="/game-images/cyberpunk2077.jpeg"
                    alt="Cyberpunk 2077"
                    className="object-cover rounded-t-2xl"
                    fill
                />
            </div>

            <div className="space-y-3">
                <span className="uppercase font-archivo font-bold text-base leading-4 text-neutral-500 tracking-normal block">genre</span>
                <div className="flex items-center justify-between font-archivo font-bold text-lg leading-5 tracking-sm text-gray-medium">
                    <h2 className="inline">Product name</h2>
                    <span className="inline">$119</span>
                </div>
            </div>

            <button className="uppercase font-archivo font-bold text-base leading-4 tracking-sm text-center py-5 w-full border border-gray-medium rounded-lg"> add to cart</button>
        </article>
    );
}
