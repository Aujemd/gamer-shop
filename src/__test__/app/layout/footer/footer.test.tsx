import { render, screen } from "@testing-library/react";

import { Footer } from "@/app/layout/index";

describe("footer Component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("applies custom className", () => {
        render(<Footer className="custom-class" data-testid="footer-test-id" />);
        const footer = screen.getByTestId("footer-test-id");
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveClass("custom-class");
    });

    it("renders the logo link", () => {
        render(<Footer />);
        const logoLink = screen.getByTestId("footer-logo-link-test-id");
        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute("href", "/");
    });

    it("renders the LogoIcon component", () => {
        render(<Footer />);
        const logoIcon = screen.getByTestId("footer-logo-icon-test-id");
        expect(logoIcon).toBeInTheDocument();
        expect(logoIcon).toBeInTheDocument();
    });
});
