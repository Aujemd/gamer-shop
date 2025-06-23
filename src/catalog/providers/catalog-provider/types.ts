import type { GetGameResponseType } from "@/catalog/services";

export type CatalogContextType = GetGameResponseType & {
    genre: string;
    isLoading: boolean;
    handleGetNextPage: () => void;
    handleGetByGenrePage: (genre: string) => void;
};
