import { render, screen } from "@testing-library/react";

import { OrFooter } from "@/shared";

describe("orFooter Component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<OrFooter />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("applies custom className", () => {
        render(<OrFooter className="custom-class" data-testid="or-footer-test-id" />);
        const footer = screen.getByTestId("or-footer-test-id");
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveClass("custom-class");
    });

    it("renders the logo link", () => {
        render(<OrFooter />);
        const logoLink = screen.getByTestId("or-footer-logo-link-test-id");
        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute("href", "/");
    });

    it("renders the LogoIcon component", () => {
        render(<OrFooter />);
        const logoIcon = screen.getByTestId("or-footer-logo-icon-test-id");
        expect(logoIcon).toBeInTheDocument();
        expect(logoIcon).toBeInTheDocument();
    });
});
