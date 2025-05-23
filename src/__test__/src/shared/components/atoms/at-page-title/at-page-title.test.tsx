import { render, screen } from "@testing-library/react";

import { AtPageTitle } from "@/shared";

describe("atPageTitle component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<AtPageTitle>Catalog</AtPageTitle>);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders as an h1 element", () => {
        const { getByRole } = render(<AtPageTitle>Title</AtPageTitle>);
        const heading = getByRole("heading", { level: 1 });
        expect(heading).toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(
            <AtPageTitle
                data-testid="at-page-title-test-id"
                className="custom-class"
            >
                Title
            </AtPageTitle>,
        );
        const heading = screen.getByTestId("at-page-title-test-id");
        expect(heading).toHaveClass("custom-class");
    });
});
