import { fireEvent, render, screen } from "@testing-library/react";

import { AtLink } from "@/shared";

describe("atLink Component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<AtLink href="/home">Home</AtLink>);
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders a link with the correct href", () => {
        render(
            <AtLink
                href="/test"
                data-testid="at-link-test-id"
            >
                test
            </AtLink>,
        );
        const link = screen.getByTestId("at-link-test-id");
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/test");
    });

    it("renders children correctly", () => {
        render(<AtLink href="/test">Home</AtLink>);
        expect(screen.getByText("Home")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(
            <AtLink
                href="/test"
                className="custom-class"
                data-testid="at-link-test-id"
            >
                Test
            </AtLink>,
        );
        expect(screen.getByTestId("at-link-test-id")).toHaveClass("custom-class");
    });

    it("passes additional props to the anchor", () => {
        render(<AtLink href="/props" data-testid="at-link-test-id">Props</AtLink>);
        expect(screen.getByTestId("at-link-test-id")).toBeInTheDocument();
    });

    it("calls onClick handler when clicked", async () => {
        const handleClick = jest.fn();
        render(<AtLink href="/click" onClick={handleClick} data-testid="at-link-test-id">test</AtLink>);
        fireEvent.click(screen.getByTestId("at-link-test-id"));
        expect(handleClick).toHaveBeenCalled();
    });
});
