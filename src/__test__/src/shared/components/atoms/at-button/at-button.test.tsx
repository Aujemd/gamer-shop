import { fireEvent, render, screen } from "@testing-library/react";

import { AtButton } from "@/shared";

describe("atButton Component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<AtButton>Click me</AtButton>);
        expect(asFragment()).toMatchSnapshot();
    });

    it("applies custom className", () => {
        render(<AtButton className="custom-class" data-testid="button-test-id">Test</AtButton>);
        expect(screen.getByTestId("button-test-id")).toHaveClass("custom-class");
    });

    it("passes additional props to the button", () => {
        render(<AtButton data-testid="my-btn">Test</AtButton>);
        expect(screen.getByTestId("my-btn")).toBeInTheDocument();
    });

    it("calls onClick when clicked", () => {
        const handleClick = jest.fn();
        render(<AtButton onClick={handleClick} data-testid="button-test-id">Click</AtButton>);
        fireEvent.click(screen.getByTestId("button-test-id"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
