import type { HTMLAttributes } from "react";

import { AtPageTitle, MlDropdown } from "@/shared";

type CatalogHeaderProps = Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * CatalogHeader component.
 * Displays the top section of the catalog page.
 * @param props - The component props.
 * @returns The catalog header component.
 */
export default function CatalogHeader(props: CatalogHeaderProps) {
    const { className = "", ...rest } = props;

    return (
        <section {...rest} className={`py-8 px-6 border-b border-b-stroke-tertiary xl:px-0 xl:py-12 ${className}`}>
            <div className="max-w-desktop mx-auto">
                <AtPageTitle data-testid="catalog-header-at-page-title-test-id" className="text-left uppercase lg:normal-case">
                    Top Sellers
                </AtPageTitle>
                <div className="mt-8 lg:mt-12 divide-stroke-secondary divide-x lg:flex lg:items-center lg:justify-end">
                    <label htmlFor="catalog-header-genre-ml-dropdown" className="font-archivo font-bold text-xl leading-6 tracking-sm text-center pr-6" data-testid="catalog-header-genre-ml-dropdown-label-test-id">Genre</label>
                    <MlDropdown id="catalog-header-genre-ml-dropdown" className=" py-4 pl-10" data-testid="catalog-header-genre-ml-dropdown-test-id">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </MlDropdown>
                </div>
            </div>
        </section>
    );
}
