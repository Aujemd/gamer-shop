import { render, screen } from "@testing-library/react";

import { Header } from "@/app/layout/index";

describe("header Component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render the header element with custom props", () => {
        render(<Header data-testid="header-test-id" className="custom-class" />);
        const header = screen.getByTestId("header-test-id");
        expect(header).toBeInTheDocument();
        expect(header).toHaveClass("custom-class");
    });

    it("renders the logo/title element", () => {
        render(<Header />);
        const logoLink = screen.getByTestId("header-logo-link-test-id");
        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute("href", "/");
    });

    describe("should test all cases for the cart element", () => {
        it("renders the cart's link", () => {
            render(<Header />);
            const cartLink = screen.getByTestId("header-cart-link-test-id");
            expect(cartLink).toBeInTheDocument();
            expect(cartLink).toHaveAttribute("href", "/cart");
        });

        it("renders the cart's icon", () => {
            render(<Header />);
            const cartIcon = screen.getByTestId("header-cart-icon-test-id");
            expect(cartIcon).toBeInTheDocument();
        });
    });
});
