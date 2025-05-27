import { render, screen } from "@testing-library/react";

import { CatalogProducts } from "@/catalog";
import { allGames } from "@/utils/endpoint";

const mockProducts = allGames;

describe("catalogProducts", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<CatalogProducts products={mockProducts} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("applies custom classname", () => {
        render(<CatalogProducts products={mockProducts} className="custom-class" data-testid="catalog-products-test-id" />);
        const section = screen.getByTestId("catalog-products-test-id");
        expect(section).toHaveClass("custom-class");
    });
    it("renders a list of product cards", () => {
        render(<CatalogProducts products={mockProducts} />);

        mockProducts.forEach((product) => {
            expect(screen.getByTestId(`catalog-products-ml-product-card-${product.id}-test-id`)).toBeInTheDocument();
        });
    });
    it("renders a 'See More' button", () => {
        render(<CatalogProducts products={mockProducts} />);
        const seeMoreButton = screen.getByTestId("catalog-products-see-more-button-test-id");
        expect(seeMoreButton).toBeInTheDocument();
        expect(seeMoreButton).toHaveTextContent("See More");
    });
});
