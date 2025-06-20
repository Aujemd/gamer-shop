import type { JSX } from "react";

import { CatalogHeader, CatalogProducts, CatalogProvider } from "@/catalog";

/**
 * Main page component of the application.
 * @returns The main page component.
 */
export default async function Home(): Promise<JSX.Element> {
    return (

        <CatalogProvider>
            <CatalogHeader />
            <CatalogProducts />
        </CatalogProvider>

    );
}
