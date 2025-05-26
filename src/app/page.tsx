import type { JSX } from "react";

import { CatalogHeader, CatalogProducts } from "@/catalog";
import { allGames } from "@/utils/endpoint";

/**
 * Main page component of the application.
 * @returns The main page component.
 */
export default async function Home(): Promise<JSX.Element> {
    return (
        <>
            <CatalogHeader />
            <CatalogProducts products={allGames} />
        </>
    );
}
