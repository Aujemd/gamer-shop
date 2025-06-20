import type { JSX } from "react";

import { CatalogHeader, CatalogProducts, CatalogProvider } from "@/catalog";
import { getGames } from "@/catalog/services";

/**
 * Main page component of the application.
 * @returns The main page component.
 */
export default async function Home(): Promise<JSX.Element> {
    const { games, totalPages, currentPage } = await getGames();

    return (

        <CatalogProvider>
            <CatalogHeader />
            <CatalogProducts initialProducts={games} totalPages={totalPages} currentPage={currentPage} />
        </CatalogProvider>

    );
}
