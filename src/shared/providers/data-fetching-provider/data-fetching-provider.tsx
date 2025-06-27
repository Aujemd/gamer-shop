"use client";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from "@tanstack/react-query";
import { createContext, useContext } from "react";

import type { DataFetchingContextValue } from "@/shared";

export const DataFetchingContext = createContext<DataFetchingContextValue | null>(null);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60,
        },
    },
});

export const useQueryWrapped = useQuery;

export const dataFetchingContextValue = {
    useQueryWrapped,
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
        <QueryClientProvider client={queryClient}>
            <DataFetchingContext.Provider value={dataFetchingContextValue}>
                {children}
            </DataFetchingContext.Provider>
        </QueryClientProvider>

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
