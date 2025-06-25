"use client";
import { createContext, useContext } from "react";
import useSWR, { SWRConfig } from "swr";

import type { DataFetchingContextType, useCachedFetchProps } from "@/shared";

export const DataFetchingContext = createContext<DataFetchingContextType | null>(null);

export const useCachedFetch = ({ key, fetcher, config }: useCachedFetchProps) => useSWR(key, fetcher, config);

export const dataFetchingContextValue: DataFetchingContextType = {
    useCachedFetch,
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
        <SWRConfig value={{ }}>
            <DataFetchingContext.Provider value={dataFetchingContextValue}>
                {children}
            </DataFetchingContext.Provider>
        </SWRConfig>

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
