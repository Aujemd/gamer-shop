import { render, screen } from "@testing-library/react";

import { OrCatalogHeader } from "@/catalog";

describe("orCatalogHeader Component", () => {
    it("should renders correctly", () => {
        const { asFragment } = render(<OrCatalogHeader data-testid="or-catalog-header-section-test-id" />);
        expect(screen.getByTestId("or-catalog-header-section-test-id")).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the page title", () => {
        render(<OrCatalogHeader />);
        const title = screen.getByTestId("or-catalog-header-title-test-id");
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(/top sellers/i);
    });

    it("renders the genre label", () => {
        render(<OrCatalogHeader />);
        const label = screen.getByTestId("or-catalog-genre-select-label-test-id");
        expect(label).toBeInTheDocument();
        expect(label).toHaveTextContent(/genre/i);
        expect(label).toHaveAttribute("for", "or-catalog-genre-select");
    });

    it("renders the select with options", () => {
        render(<OrCatalogHeader />);
        const select = screen.getByTestId("or-catalog-genre-select-test-id");
        expect(select).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(<OrCatalogHeader className="custom-header" data-testid="or-catalog-header-section" />);
        expect(screen.getByTestId("or-catalog-header-section")).toHaveClass("custom-header");
    });
});
