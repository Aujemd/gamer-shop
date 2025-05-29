import { render, screen } from "@testing-library/react";

import { formatCurrency, MlCardBasket } from "@/shared";
import { allGames } from "@/utils/endpoint";

describe("mlCardBasket", () => {
    const productMock = allGames[0];

    it("should render correctly", () => {
        const { asFragment } = render(<MlCardBasket {...productMock} />);
        expect(asFragment).toMatchSnapshot();
    });

    it("renders the product image", () => {
        render(<MlCardBasket {...productMock} />);
        expect(screen.getByTestId(`ml-card-basket-image-test-id-${productMock.id}`)).toBeInTheDocument();
    });

    it("renders the genre, name, description and price", () => {
        render(<MlCardBasket {...productMock} />);
        expect(screen.getByTestId(`ml-card-basket-genre-test-id-${productMock.id}`)).toHaveTextContent(productMock.genre);
        expect(screen.getByTestId(`ml-card-basket-name-test-id-${productMock.id}`)).toHaveTextContent(productMock.name);
        expect(screen.getByTestId(`ml-card-basket-description-test-id-${productMock.id}`)).toHaveTextContent(productMock.description);
        expect(screen.getByTestId(`ml-card-basket-price-test-id-${productMock.id}`)).toHaveTextContent(formatCurrency(productMock.price));
    });

    it("renders not render description if is not provided in props", () => {
        const productMockWithoutDescription = {
            ...productMock,
            description: "",
        };
        render(<MlCardBasket {...productMockWithoutDescription} />);
        expect(screen.queryByTestId(`ml-card-basket-description-test-id-${productMockWithoutDescription.id}`)).not.toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(<MlCardBasket {...productMock} className="custom-class" data-testid="ml-card-basket-test-id" />);
        expect(screen.getByTestId("ml-card-basket-test-id")).toHaveClass("custom-class");
    });
});
