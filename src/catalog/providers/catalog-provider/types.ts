import type { GetGameResponseType } from "@/catalog/services";

export type CatalogContextType = GetGameResponseType & {
    genre: string;
    handleGetNextPage: () => void;
    handleGetByGenrePage: (genre: string) => void;
};
