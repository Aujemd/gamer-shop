import type {
    useQuery,
} from "@tanstack/react-query";

export type DataFetchingContextValue = {
    useQueryWrapped: typeof useQuery;
};
