import { render, screen } from "@testing-library/react";
import React from "react";

import { Layout } from "@/app/layout/index";

describe("layout Component", () => {
    const contentMock = "Hello Layout";

    it("renders correctly", () => {
        const { asFragment } = render(
            <Layout>
                {contentMock}
            </Layout>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders children correctly", () => {
        render(
            <Layout>
                <div data-testid="child-test-id">{contentMock}</div>
            </Layout>,
        );
        const childElement = screen.getByTestId("child-test-id");
        expect(childElement).toBeInTheDocument();
        expect(childElement).toHaveTextContent(contentMock);
    });

    it("renders the Header component", () => {
        render(<Layout>{contentMock}</Layout>);
        const header = screen.getByTestId("layout-or-header-test-id");
        expect(header).toBeInTheDocument();
    });

    it("renders the Footer component", () => {
        render(<Layout>{contentMock}</Layout>);
        const footer = screen.getByTestId("layout-or-footer-test-id");
        expect(footer).toBeInTheDocument();
    });
});
