import type { JSX } from "react";

import { CatalogHeader, CatalogProducts } from "@/catalog";
import { getGames } from "@/services";

/**
 * Main page component of the application.
 * @param root0 - The parameters passed to page.
 * @param root0.params - The parameter genre.
 * @returns The main page component.
 */
export default async function HomeFilteredByGenre({
    params,
}: {
    params: Promise<{ genre: string }>;
}): Promise<JSX.Element> {
    const { genre } = await params;
    const { games, availableFilters } = await getGames(genre);

    return (
        <>
            <CatalogHeader filters={availableFilters} />
            <CatalogProducts products={games} />
        </>
    );
}
