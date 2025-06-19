import type { Game } from "@/utils/endpoint";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiGamesEndpoint = "/games";

/**
 * Fetches a list of games from the API.
 * @param query - An object containing query parameters for filtering games, such as genre and page number.
 * @returns A promise that resolves to an object containing the games, available filters, total pages, and current page.
 * @throws {Error} If the fetch operation fails or the response is not ok.
 */
export async function getGames(query = {}): Promise<{ games: Game[]; availableFilters: string[]; totalPages: number; currentPage: number }> {
    const handleQuery = new URLSearchParams(query).toString();

    const parsedQuery = handleQuery ? `?${handleQuery}` : "";

    const response = await fetch(`${apiBaseUrl}${apiGamesEndpoint}${parsedQuery}`);
    if (!response.ok) {
        throw new Error("Failed to fetch games");
    }
    return response.json();
}
