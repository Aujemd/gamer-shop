import { render, screen } from "@testing-library/react";

import CartHeader from "@/cart/components/cart-header";

describe("cartHeader component", () => {
    it("renders the section element", () => {
        render(<CartHeader data-testid="cart-header-test-id" />);
        expect(screen.getByTestId("cart-header-test-id")).toBeInTheDocument();
        expect(screen.getByTestId("cart-header-test-id").tagName).toBe("SECTION");
    });

    it("renders the page title", () => {
        render(<CartHeader />);
        expect(screen.getByTestId("catalog-header-at-page-title-test-id")).toHaveTextContent(/your cart/i);
    });

    it("applies custom className", () => {
        render(<CartHeader className="custom-class" data-testid="cart-header-test-id" />);
        expect(screen.getByTestId("cart-header-test-id")).toHaveClass("custom-class");
    });

    it("passes additional props to the section", () => {
        render(<CartHeader aria-label="cart-header" data-testid="cart-header-test-id" />);
        expect(screen.getByLabelText("cart-header")).toBeInTheDocument();
    });
});
