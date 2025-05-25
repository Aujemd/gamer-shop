import type { JSX } from "react";

import { CatalogCard, CatalogHeader } from "@/catalog";

/**
 * Main page component of the application.
 * @returns The main page component.
 */
export default async function Home(): Promise<JSX.Element> {
    return (
        <>
            <CatalogHeader />
            <div className="p-6">
                <CatalogCard />
            </div>
        </>
    );
}
