"use client";
import type { ChangeEvent } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { useCatalog } from "@/catalog";

/**
 * Custom hook for managing catalog filters dropdown.
 * Provides functionality to handle filter selection and update the URL query parameters.
 * @returns An object containing the selected filter, a function to create query strings, and a function to handle dropdown changes.
 */
export function useCatalogFiltersDropdown() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { handleGetByGenrePage } = useCatalog();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedGenre = e.target.value;

        const getGetByGenrePage = selectedGenre ? `${pathname}?${createQueryString("genre", selectedGenre)}` : pathname;

        router.replace(getGetByGenrePage);

        handleGetByGenrePage(selectedGenre);
    };

    return {
        createQueryString,
        handleDropdownChange,
    };
}
