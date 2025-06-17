import type { HTMLAttributes } from "react";

import { AtPageTitle, MlDropdown } from "@/shared";

type CatalogHeaderProps = Readonly<Omit<HTMLAttributes<HTMLElement>, "children">> & { filters: string[] };

/**
 * CatalogHeader component.
 * Displays the top section of the catalog page.
 * @param props - The component props.
 * @returns The catalog header component.
 */
export default function CatalogHeader(props: CatalogHeaderProps) {
    const { className = "", filters, ...rest } = props;

    return (
        <section {...rest} className={`py-8 px-6 border-b border-b-stroke-tertiary xl:px-0 xl:py-12 ${className}`}>
            <div className="max-w-desktop mx-auto">
                <AtPageTitle data-testid="catalog-header-at-page-title-test-id" className="text-left uppercase lg:normal-case">
                    Top Sellers
                </AtPageTitle>
                <div className="mt-8 lg:mt-12 divide-stroke-secondary divide-x lg:flex lg:items-center lg:justify-end">
                    <label htmlFor="catalog-header-genre-ml-dropdown" className="font-archivo font-bold text-xl leading-6 tracking-sm text-center pr-6" data-testid="catalog-header-genre-ml-dropdown-label-test-id">Genre</label>
                    <MlDropdown id="catalog-header-genre-ml-dropdown" className=" py-4 pl-10" data-testid="catalog-header-genre-ml-dropdown-test-id">
                        {
                            filters.map(filter => (
                                <option key={filter} value={filter}>
                                    {filter}
                                </option>
                            ))
                        }
                        <option value="all">All</option>
                    </MlDropdown>
                </div>
            </div>
        </section>
    );
}
