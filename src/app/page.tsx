import type { JSX } from "react";

import { CatalogHeader, CatalogProducts } from "@/catalog";
import { getGames } from "@/services";

/**
 * Main page component of the application.
 * @returns The main page component.
 */
export default async function Home(): Promise<JSX.Element> {
    const { games, availableFilters } = await getGames();

    return (
        <>
            <CatalogHeader filters={availableFilters} />
            <CatalogProducts products={games} />
        </>
    );
}
