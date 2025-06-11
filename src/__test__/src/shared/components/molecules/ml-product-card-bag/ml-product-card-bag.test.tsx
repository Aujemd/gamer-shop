import { render, screen } from "@testing-library/react";

import { formatCurrency } from "@/shared";
import { MlProductCardBag } from "@/shared/components/molecules";
import { allGames } from "@/utils/endpoint";

const mockGames = [allGames[0], allGames[1], allGames[2]];

describe("mlProductCardBag", () => {
    it("shows the title and item count", () => {
        render(<MlProductCardBag games={mockGames} />);
        expect(screen.getByRole("heading", { name: /Order Summary/i })).toBeInTheDocument();
        expect(screen.getByText(`${mockGames.length} items`)).toBeInTheDocument();
    });

    it("shows the game names and prices", () => {
        render(<MlProductCardBag games={mockGames} />);

        expect(screen.getAllByRole("listitem")).toHaveLength(mockGames.length);
        mockGames.forEach((game) => {
            expect(screen.getByText(game.name)).toBeInTheDocument();
            expect(screen.getByLabelText(`Price for ${game.name}: ${formatCurrency(game.price)}`)).toBeInTheDocument();
        });
    });

    it("shows the correct order total", () => {
        const orderTotal = mockGames.reduce((acc, game) => acc + game.price, 0);
        const formattedTotal = formatCurrency(orderTotal);

        render(<MlProductCardBag games={mockGames} />);

        expect(screen.getByText(formattedTotal)).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /Order Total/i })).toBeInTheDocument();
    });

    it("uses aria-labelledby correctly", () => {
        render(<MlProductCardBag games={mockGames} />);
        const section = screen.getByRole("region", { name: /order summary/i });
        expect(section).toBeInTheDocument();
    });
});
