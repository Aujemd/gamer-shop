import { render, screen } from "@testing-library/react";

import { CatalogHeader } from "@/catalog";

describe("catalogHeader Component", () => {
    it("should renders correctly", () => {
        const { asFragment } = render(<CatalogHeader data-testid="catalog-header-section-test-id" />);
        expect(screen.getByTestId("catalog-header-section-test-id")).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the page title", () => {
        render(<CatalogHeader />);
        const title = screen.getByTestId("catalog-header-title-test-id");
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(/top sellers/i);
    });

    it("renders the genre label", () => {
        render(<CatalogHeader />);
        const label = screen.getByTestId("catalog-genre-select-label-test-id");
        expect(label).toBeInTheDocument();
        expect(label).toHaveTextContent(/genre/i);
        expect(label).toHaveAttribute("for", "catalog-genre-select");
    });

    it("renders the select with options", () => {
        render(<CatalogHeader />);
        const select = screen.getByTestId("catalog-genre-select-test-id");
        expect(select).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(<CatalogHeader className="custom-header" data-testid="catalog-header-section" />);
        expect(screen.getByTestId("catalog-header-section")).toHaveClass("custom-header");
    });
});
