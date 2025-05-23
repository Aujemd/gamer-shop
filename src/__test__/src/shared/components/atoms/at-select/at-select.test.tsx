import { fireEvent, render, screen } from "@testing-library/react";

import { AtSelect } from "@/shared";

describe("atSelect Component", () => {
    it("renders the select element", () => {
        const { asFragment } = render(
            <AtSelect>
                <option value="test-1">test 1</option>
                <option value="test-2">test 2</option>
            </AtSelect>,
        );
        expect(asFragment).toMatchSnapshot();
    });

    it("renders the children options", () => {
        render(
            <AtSelect>
                <option value="test-1">test 1</option>
                <option value="test-2">test 2</option>
            </AtSelect>,
        );
        expect(screen.getByText("test 1")).toBeInTheDocument();
        expect(screen.getByText("test 2")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(
            <AtSelect
                data-testid="at-select-test-id"
                className="custom-class"
            >
                <option value="x">X</option>
            </AtSelect>,
        );
        const select = screen.getByTestId("at-select-test-id");

        expect(select).toHaveClass("custom-class");
    });

    it("calls onChange when an option is selected", () => {
        const handleChange = jest.fn();
        render(
            <AtSelect
                data-testid="at-select-test-id"
                onChange={handleChange}
            >
                <option value="test">test</option>
            </AtSelect>,
        );

        const select = screen.getByTestId("at-select-test-id");
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
