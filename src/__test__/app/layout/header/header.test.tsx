import { render } from "@testing-library/react";

import { Header } from "@/app/layout/index";

describe("header Component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render the header element with custom props", () => {
        const { getByTestId } = render(<Header data-testid="header-test-id" className="custom-class" />);
        expect(getByTestId("header-test-id")).toBeInTheDocument();
        expect(getByTestId("header-test-id")).toHaveClass("custom-class");
    });

    it("renders the logo/title element", () => {
        const { getByTestId } = render(<Header />);

        expect(getByTestId("header-logo-link-test-id")).toBeInTheDocument();
        expect(getByTestId("header-logo-link-test-id")).toHaveAttribute("href", "/");
    });

    describe("should test all cases for the cart element", () => {
        it("renders the cart's link", () => {
            const { getByTestId } = render(<Header />);
            expect(getByTestId("header-cart-link-test-id")).toBeInTheDocument();
            expect(getByTestId("header-cart-link-test-id")).toHaveAttribute("href", "/cart");
        });

        it("renders the cart's icon", () => {
            const { getByTestId } = render(<Header />);
            expect(getByTestId("header-cart-icon-test-id")).toBeInTheDocument();
        });
    });
});
