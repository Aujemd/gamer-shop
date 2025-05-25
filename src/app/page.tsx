import type { JSX } from "react";

import { CatalogHeader } from "@/catalog";
import { MlProductCard } from "@/shared";
import { allGames } from "@/utils/endpoint";

/**
 * Main page component of the application.
 * @returns The main page component.
 */
export default async function Home(): Promise<JSX.Element> {
    return (
        <>
            <CatalogHeader />
            <div className="p-6">
                <MlProductCard
                    {...allGames[0]}
                />
            </div>
        </>
    );
}
