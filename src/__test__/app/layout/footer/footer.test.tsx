import { render } from "@testing-library/react";

import { Footer } from "@/app/layout/index";

describe("footer Component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("applies custom className", () => {
        const { getByTestId } = render(<Footer className="custom-class" data-testid="footer-test-id" />);
        expect(getByTestId("footer-test-id")).toBeInTheDocument();
        expect(getByTestId("footer-test-id")).toHaveClass("custom-class");
    });

    it("renders the logo link", () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId("footer-logo-link-test-id")).toBeInTheDocument();
        expect(getByTestId("footer-logo-link-test-id")).toHaveAttribute("href", "/");
    });

    it("renders the LogoIcon component", () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId("footer-logo-icon-test-id")).toBeInTheDocument();
    });
});
