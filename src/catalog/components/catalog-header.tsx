import type { HTMLAttributes } from "react";

import { AtPageTitle } from "@/shared";

import CatalogFiltersDropdown from "./catalog-filters-dropdown";

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
        <section
            {...rest}
            className={`py-8 px-6 border-b border-b-stroke-tertiary xl:px-0 xl:py-12 ${className}`}
            aria-labelledby="catalog-header-at-page-title-id"
        >
            <div className="max-w-desktop mx-auto">
                <AtPageTitle data-testid="catalog-header-at-page-title-test-id" className="text-left uppercase lg:normal-case" id="catalog-header-at-page-title-id">
                    Top Sellers
                </AtPageTitle>
                <CatalogFiltersDropdown />
            </div>
        </section>
    );
}
