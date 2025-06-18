"use server";

import type { Game } from "@/utils/endpoint";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
/**
 * Fetches a list of games from the API.
 * @param genre - The genre to filter games by. If empty, all games are returned.
 * @returns A promise that resolves to an array of games.
 * @throws {Error} If the fetch operation fails or the response is not ok.
 */
export async function getGames(genre: string = ""): Promise<{ games: Game[]; availableFilters: string[]; totalPages: number; currentPage: number }> {
    const query = genre ? `?genre=${genre}` : "";

    const response = await fetch(`${apiBaseUrl}/games${query}`);
    if (!response.ok) {
        throw new Error("Failed to fetch games");
    }
    return response.json();
}
