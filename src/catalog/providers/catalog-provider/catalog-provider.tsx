"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import type { CatalogContextType, GetGameResponseType } from "@/catalog";

import { getGames } from "@/catalog/services";
import { useDataFetching } from "@/shared";

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

    const { useQueryWrapped } = useDataFetching();

    const getGamesParams = useMemo(() => {
        const { currentPage, genre } = catalogState;
        return {
            ...(currentPage && { page: currentPage }),
            ...(genre && { genre }),
        };
    }, [catalogState.currentPage, catalogState.genre]);

    const { isFetching, isSuccess, data }
    = useQueryWrapped({
        queryKey: ["games", catalogState.currentPage, catalogState.genre],
        queryFn: () => getGames(getGamesParams),

    });

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

    const catalogContextValue = useMemo(() => ({ ...catalogState, isLoading: isFetching, handleGetNextPage, handleGetByGenrePage }), [catalogState, isFetching, handleGetNextPage, handleGetByGenrePage]);

    useEffect(() => {
        if (isSuccess && data?.games) {
            const { games, ...response }: GetGameResponseType = data;
            setCatalogState(({ currentPage, games: prevGames, ...prevState }) => {
                const currentIds = new Set(prevGames.map(game => game.id));

                const newGames = games.filter(game => !currentIds.has(game.id));

                return {
                    ...prevState,
                    ...response,
                    currentPage,
                    games: [...prevGames, ...newGames],
                };
            });
        }
    }, [data?.games, isSuccess]);
    return (

        <CatalogContext.Provider value={catalogContextValue}>
            {children}
        </CatalogContext.Provider>

    );
}
