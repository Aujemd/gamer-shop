"use client";
import { useState } from "react";

import type { Game } from "@/utils/endpoint";

const INITIAL_PAGE = 1;
/**
 * Custom hook to manage catalog products.
 *
 * This hook fetches products from the catalog and manages pagination.
 * It provides a function to load the next page of products.
 * @param initialProducts - An optional initial list of products to start with.
 * @returns An object containing:
 * - `isLoading`: A boolean indicating if the data is currently being loaded.
 * - `error`: An error object if the fetch operation fails.
 * - `getNextPage`: A function to load the next page of products.
 */
export function useCatalogProducts(initialProducts: Game[] = []) {
    const [page, setPage] = useState<number>(INITIAL_PAGE);
    const [products] = useState<Game[]>(initialProducts);

    const handleGetNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    return { page, products, handleGetNextPage };
}
