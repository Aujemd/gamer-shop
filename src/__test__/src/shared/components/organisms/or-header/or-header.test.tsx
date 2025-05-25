import { render, screen } from "@testing-library/react";

import { OrHeader } from "@/shared";

describe("orHeader Component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<OrHeader />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render the header element with custom props", () => {
        render(<OrHeader data-testid="or-header-test-id" className="custom-class" />);
        const header = screen.getByTestId("or-header-test-id");
        expect(header).toBeInTheDocument();
        expect(header).toHaveClass("custom-class");
    });

    it("renders the logo/title element", () => {
        render(<OrHeader />);
        const logoLink = screen.getByTestId("or-header-logo-link-test-id");
        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute("href", "/");
    });

    describe("should test all cases for the cart element", () => {
        it("renders the cart's link", () => {
            render(<OrHeader />);
            const cartLink = screen.getByTestId("or-header-cart-link-test-id");
            expect(cartLink).toBeInTheDocument();
            expect(cartLink).toHaveAttribute("href", "/cart");
        });

        it("renders the cart's icon", () => {
            render(<OrHeader />);
            const cartIcon = screen.getByTestId("or-header-cart-icon-test-id");
            expect(cartIcon).toBeInTheDocument();
        });
    });
});
