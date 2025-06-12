import { render, screen } from "@testing-library/react";

import { formatCurrency, OrOrderSummary } from "@/shared";
import { allGames } from "@/utils/endpoint";

const mockGames = [allGames[0], allGames[1], allGames[2]];
describe("orOrderSummary", () => {
    it("renders the MlProductCardBag with games", () => {
        render(<OrOrderSummary games={mockGames} />);
        expect(screen.getByRole("heading", { name: /Order summary/i })).toBeInTheDocument();

        expect(screen.getAllByRole("listitem")).toHaveLength(mockGames.length);
        mockGames.forEach((game) => {
            expect(screen.getByText(game.name)).toBeInTheDocument();
            expect(screen.getByLabelText(`Price for ${game.name}: ${formatCurrency(game.price)}`)).toBeInTheDocument();
        });
    });

    it("renders the Checkout button", () => {
        render(<OrOrderSummary games={mockGames} />);
        expect(screen.getByRole("button", { name: /Checkout/i })).toBeInTheDocument();
    });
});
