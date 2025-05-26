import { render, screen } from "@testing-library/react";

import type { Game } from "@/utils/endpoint";

import { formatCurrency, MlProductCard } from "@/shared";
import { allGames } from "@/utils/endpoint";

const mockGame: Game = allGames[0];

describe("mlProductCard", () => {
    it("should render correctly", () => {
        const { asFragment } = render(
            <MlProductCard
                data-testid="ml-product-card-test-id"
                {...mockGame}
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders the card with all main elements", () => {
        render(
            <MlProductCard
                data-testid="ml-product-card-test-id"
                {...mockGame}
            />,
        );
        expect(screen.getByTestId("ml-product-card-test-id")).toBeInTheDocument();
        expect(screen.getByTestId(`ml-product-card-image-test-id-${mockGame.id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`ml-product-card-genre-test-id-${mockGame.id}`)).toHaveTextContent(mockGame.genre);
        expect(screen.getByTestId(`ml-product-card-name-test-id-${mockGame.id}`)).toHaveTextContent(mockGame.name);
        expect(screen.getByTestId(`ml-product-card-price-test-id-${mockGame.id}`)).toHaveTextContent(formatCurrency(mockGame.price));
        expect(screen.getByTestId(`ml-product-card-is-new-label-test-id-${mockGame.id}`)).toBeInTheDocument();
    });

    it("does not render the 'New' badge if isNew is false", () => {
        render(<MlProductCard {...mockGame} isNew={false} />);
        expect(screen.queryByTestId(`ml-product-card-is-new-label-test-id-${mockGame.id}`)).not.toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(
            <MlProductCard
                {...mockGame}
                data-testid="ml-product-card-test-id"
                className="custom-class"
            />,
        );
        expect(screen.getByTestId("ml-product-card-test-id")).toHaveClass("custom-class");
    });
});
