import { render } from "@testing-library/react";
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
        const { getByTestId } = render(
            <Layout>
                <div data-testid="child-test-id">{contentMock}</div>
            </Layout>,
        );
        expect(getByTestId("child-test-id")).toBeInTheDocument();
        expect(getByTestId("child-test-id")).toHaveTextContent(contentMock);
    });
});
