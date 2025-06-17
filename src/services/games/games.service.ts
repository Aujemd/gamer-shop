"use server";

import type { Game } from "@/utils/endpoint";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
/**
 * Fetches a list of games from the API.
 * @returns A promise that resolves to an array of games.
 * @throws {Error} If the fetch operation fails or the response is not ok.
 */
export async function getGames(): Promise<{ games: Game[]; availableFilters: string[]; totalPages: number; currentPage: number }> {
    const response = await fetch(`${apiBaseUrl}/games`);
    if (!response.ok) {
        throw new Error("Failed to fetch games");
    }
    return response.json();
}
