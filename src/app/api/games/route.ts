import { allGames, availableFilters, delay } from "@/utils/endpoint";

const ITEMS_PER_PAGE = 12;

/**
 * GET /api/games
 * @param request - The incoming request object.
 * @returns - A JSON response containing the filtered games, available filters, total pages, and current page.
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const genre = searchParams.get("genre");
    let page = Number.parseInt(searchParams.get("page") ?? "1");

    let games = allGames;

    if (genre) {
        games = games.filter(
            game => game.genre.toLowerCase() === genre.toLowerCase(),
        );
    }

    if (page < 1 || Number.isNaN(page))
        page = 1;

    // Mock a delay to simulate a real API
    await delay(2000);

    const fromIndex = (page - 1) * ITEMS_PER_PAGE;
    const toIndex = page * ITEMS_PER_PAGE;
    games = games.slice(fromIndex, toIndex);

    const totalPages = Math.ceil(allGames.length / ITEMS_PER_PAGE);
    const currentPage = page;

    return Response.json({ games, availableFilters, totalPages, currentPage });
}
