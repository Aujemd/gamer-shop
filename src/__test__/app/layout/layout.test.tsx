import { render } from "@testing-library/react";
import React from "react";

import { Layout } from "@/app/layout/index";

describe("layout Component", () => {
    it("renders children correctly", () => {
        const contentMock = "Hello Layout";
        const { asFragment, getByTestId } = render(
            <Layout>
                <div data-testid="child">{contentMock}</div>
            </Layout>,
        );
        expect(getByTestId("child")).toBeInTheDocument();
        expect(getByTestId("child")).toHaveTextContent(contentMock);
        expect(asFragment()).toMatchSnapshot();
    });
});
