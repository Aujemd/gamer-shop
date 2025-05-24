import type { JSX } from "react";

import { CatalogHeader } from "@/catalog";

/**
 * Main page component of the application.
 * @returns The main page component.
 */
export default async function Home(): Promise<JSX.Element> {
    return (
        <>
            <CatalogHeader />
        </>
    );
}
