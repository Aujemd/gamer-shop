"use client";
import { createContext, useContext, useEffect, useState } from "react";

import type { CatalogContextType } from "@/catalog";

import { getGames } from "@/catalog/services";

export const catalogContextDefaultValue: CatalogContextType = {
    games: [],
    totalPages: 0,
    currentPage: 0,
    availableFilters: [],
};

const CatalogContext = createContext<CatalogContextType>(catalogContextDefaultValue);

/**
 * Custom hook to access the catalog context.
 * Throws an error if used outside of CatalogProvider.
 * @returns The catalog context value.
 * @throws {Error} If used outside of CatalogProvider.
 */
export function useCatalog() {
    const ctx = useContext(CatalogContext);
    if (!ctx)
        throw new Error("useCatalog must be used within CatalogProvider");
    return ctx;
}

/**
 *
 * CatalogProvider component that fetches and provides game data.
 * @param root0 - The props for the CatalogProvider component.
 * @param root0.children - The children components to render within the provider.
 * @returns The CatalogContext provider with game data and loading/error states.
 */
export function CatalogProvider({ children }: { readonly children: React.ReactNode }) {
    const [catalogState, setCatalogState] = useState<CatalogContextType>(catalogContextDefaultValue);

    const fetchGames = async () => {
        try {
            const response = await getGames();

            setCatalogState(prevState => ({
                ...response,
                games: [
                    ...(prevState && Array.isArray(prevState.games) ? prevState.games : []),
                    ...(Array.isArray(response.games) ? response.games : []),
                ],
            }));
        }
        catch (e: any) {
            console.error("Failed to fetch games:", e);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <CatalogContext.Provider value={catalogState}>
            {children}
        </CatalogContext.Provider>
    );
}
