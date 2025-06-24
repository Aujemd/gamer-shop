"use client";
import { createContext, useContext } from "react";
import useSWR from "swr";

import type { DataFetchingContextType } from "@/shared";

export const DataFetchingContext = createContext<DataFetchingContextType | null>(null);

export const DataFetching: DataFetchingContextType = (key, fetcher) => {
    const { data, error, isLoading } = useSWR(key, fetcher);
    return { data, error, isLoading };
};

/**
 *
 * @param props - The props for the DataFetchingProvider component.
 * @param props.children - The children components to render within the provider.
 * @returns The DataFetchingContext provider with data fetching functionality.
 */
export function DataFetchingProvider(props: { readonly children: React.ReactNode }) {
    const { children } = props;
    return (
        <DataFetchingContext.Provider value={DataFetching}>
            {children}
        </DataFetchingContext.Provider>
    );
}

/**
 * Custom hook to access the data fetching context.
 * Throws an error if used outside of DataFetchingProvider.
 * @returns The data fetching context value.
 */
export function useDataFetching() {
    const ctx = useContext(DataFetchingContext);
    if (!ctx)
        throw new Error("useDataFetching must be used within DataFetchingProvider");
    return ctx;
}
