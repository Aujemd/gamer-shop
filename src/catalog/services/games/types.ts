import type { Game } from "@/utils/endpoint";

export type GetGameResponseType = { games: Game[]; availableFilters: string[]; totalPages: number; currentPage: number };
