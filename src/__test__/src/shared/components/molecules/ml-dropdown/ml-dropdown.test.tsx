import { fireEvent, render, screen } from "@testing-library/react";

import { MlDropdown } from "@/shared";

describe("mlDropdown Component", () => {
    it("renders the select element", () => {
        const { asFragment } = render(
            <MlDropdown>
                <option value="test-1">test 1</option>
                <option value="test-2">test 2</option>
            </MlDropdown>,
        );
        expect(asFragment).toMatchSnapshot();
    });

    it("renders the children options", () => {
        render(
            <MlDropdown>
                <option value="test-1">test 1</option>
                <option value="test-2">test 2</option>
            </MlDropdown>,
        );
        expect(screen.getByText("test 1")).toBeInTheDocument();
        expect(screen.getByText("test 2")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(
            <MlDropdown
                data-testid="ml-dropdown-test-id"
                className="custom-class"
            >
                <option value="x">X</option>
            </MlDropdown>,
        );
        const select = screen.getByTestId("ml-dropdown-test-id");

        expect(select).toHaveClass("custom-class");
    });

    it("calls onChange when an option is selected", () => {
        const handleChange = jest.fn();
        render(
            <MlDropdown
                data-testid="ml-dropdown-test-id"
                onChange={handleChange}
            >
                <option value="test">test</option>
            </MlDropdown>,
        );

        const select = screen.getByTestId("ml-dropdown-test-id");
        fireEvent.change(select, { target: { value: "test" } });
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(
            expect.objectContaining({
                target: expect.objectContaining({
                    value: "test",
                }),
            }),
        );
    });
});
