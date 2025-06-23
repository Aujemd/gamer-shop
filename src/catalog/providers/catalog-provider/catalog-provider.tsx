"use client";
import { useSearchParams } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import type { CatalogContextType } from "@/catalog";

import { getGames } from "@/catalog/services";

export const catalogContextDefaultValue: CatalogContextType = {
    games: [],
    genre: "",
    totalPages: 0,
    currentPage: 1,
    isLoading: true,
    availableFilters: [],
    handleGetNextPage: () => {},
    handleGetByGenrePage: () => {},
};

const CatalogContext = createContext<CatalogContextType>(catalogContextDefaultValue);

CatalogContext.displayName = "CatalogContext";

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
    const searchParams = useSearchParams();

    const selectedGenre = searchParams.get("genre") ?? "";

    const [catalogState, setCatalogState] = useState<CatalogContextType>({ ...catalogContextDefaultValue, genre: selectedGenre });

    const fetchGames = async () => {
        setCatalogState(prevState => ({ ...prevState, isLoading: true }));
        try {
            const { currentPage, genre } = catalogState;

            const getGamesParams = {
                ...(currentPage && { page: currentPage }),
                ...(genre && { genre }),
            };

            const response = await getGames(getGamesParams);

            setCatalogState(({ currentPage, games: prevGames, ...prevState }) => {
                const currentIds = new Set(prevGames.map(game => game.id));

                const newGames = response.games.filter(game => !currentIds.has(game.id));

                return {
                    ...prevState,
                    ...response,
                    currentPage,
                    games: [...prevGames, ...newGames],
                };
            });
        }
        catch (e: any) {
            console.error("Failed to fetch games:", e);
        }
        finally {
            setCatalogState(prevState => ({ ...prevState, isLoading: false }));
        }
    };

    const handleGetNextPage = useCallback(() => {
        setCatalogState(prevState => ({
            ...prevState,
            currentPage: prevState.currentPage + 1,
        }));
    }, []);

    const handleGetByGenrePage = useCallback((genre: string) => {
        setCatalogState(prevState => ({
            ...prevState,
            genre,
            games: [],
            currentPage: 1,
        }));
    }, []);

    const catalogContextValue = useMemo(() => ({ ...catalogState, handleGetNextPage, handleGetByGenrePage }), [catalogState, handleGetNextPage, handleGetByGenrePage]);

    useEffect(() => {
        fetchGames();
    }, [catalogState.currentPage, catalogState.genre]);

    return (
        <CatalogContext.Provider value={catalogContextValue}>
            {children}
        </CatalogContext.Provider>
    );
}
