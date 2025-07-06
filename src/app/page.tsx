import type { JSX } from "react";

import { Suspense } from "react";

import { CatalogHeader, CatalogProducts, CatalogProvider } from "@/catalog";
import { LoadingIcon } from "@/icons";

/**
 * Main page component of the application.
 * @returns The main page component.
 */
export default async function Home(): Promise<JSX.Element> {
    return (
        <Suspense fallback={<LoadingIcon className="w-8 fill-cta-fill-primary mx-auto my-6" />}>
            <CatalogProvider>
                <CatalogHeader />
                <CatalogProducts />
            </CatalogProvider>
        </Suspense>
    );
}
