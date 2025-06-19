"use client";
import { useMemo, useState } from "react";
import useSWR from "swr";

import type { Game } from "@/utils/endpoint";

import { getGames } from "@/services";

const INITIAL_PAGE = 1;
/**
 * Custom hook to manage catalog products.
 *
 * This hook fetches products from the catalog and manages pagination.
 * It provides a function to load the next page of products.
 * @param initialProducts - An optional initial list of products to start with.
 * @param genre - An optional genre filter for the products.
 * @returns An object containing:
 * - `isLoading`: A boolean indicating if the data is currently being loaded.
 * - `error`: An error object if the fetch operation fails.
 * - `getNextPage`: A function to load the next page of products.
 */
export function useCatalogProducts(initialProducts: Game[] = [], genre: string = "") {
    const [page, setPage] = useState<number>(INITIAL_PAGE);
    const [products, setProducts] = useState<Game[]>(initialProducts);

    const getCatalogParams = useMemo(() => {
        if (page === INITIAL_PAGE)
            return null;

        return {
            page,
            ...(genre && { genre }),
        };
    }, [page, genre]);

    useSWR(getCatalogParams, getGames, {
        onSuccess: ({ games }) => {
            if (games) {
                setProducts(prevProducts => [...prevProducts, ...games]);
            }
        },

    });

    const handleGetNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    return { products, handleGetNextPage };
}
