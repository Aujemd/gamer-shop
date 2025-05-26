import type { JSX } from "react";

import { CatalogHeader } from "@/catalog";
import { MlProductCard, OrProduct } from "@/shared";
import { allGames } from "@/utils/endpoint";

/**
 * Main page component of the application.
 * @returns The main page component.
 */
export default async function Home(): Promise<JSX.Element> {
    return (
        <>
            <CatalogHeader />
            <OrProduct className="max-w-desktop mx-auto">
                {allGames.map(game => (
                    <li key={game.id}>
                        <MlProductCard {...game} />
                    </li>
                ))}
            </OrProduct>

        </>
    );
}
