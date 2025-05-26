import { render, screen } from "@testing-library/react";

import { OrProduct } from "@/shared";

describe("orProduct component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(
            <OrProduct>
                <li>Item 1</li>
                <li>Item 2</li>
            </OrProduct>,
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders children correctly", () => {
        render(
            <OrProduct data-testid="or-product-test-id">
                <li data-testid="child-1">Card 1</li>
                <li data-testid="child-2">Card 2</li>
            </OrProduct>,
        );

        expect(screen.getByTestId("child-1")).toHaveTextContent("Card 1");
        expect(screen.getByTestId("child-2")).toHaveTextContent("Card 2");
        expect(screen.getByTestId("or-product-test-id")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(
            <OrProduct
                data-testid="or-product-test-id"
                className="custom-class"
            >
                <li>Card</li>
            </OrProduct>,
        );
        const ul = screen.getByTestId("or-product-test-id");
        expect(ul).toHaveClass("custom-class");
    });

    it("passes additional props to ul", () => {
        render(
            <OrProduct aria-label="product-list">
                <li>Card</li>
            </OrProduct>,
        );
        expect(screen.getByLabelText("product-list")).toBeInTheDocument();
    });
});
