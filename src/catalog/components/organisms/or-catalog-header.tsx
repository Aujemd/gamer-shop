import type { HTMLAttributes } from "react";

import { AtPageTitle, AtSelect } from "@/shared";

type OrCatalogHeaderProps = Readonly<Omit<HTMLAttributes<HTMLElement>, "children">>;

/**
 * OrCatalogHeader component.
 * Displays the top section of the catalog page.
 * @param props - The component props.
 * @returns The catalog header component.
 */
export default function OrCatalogHeader(props: OrCatalogHeaderProps) {
    const { className = "", ...rest } = props;

    return (
        <section {...rest} className={`py-8 px-6 border-b border-b-stroke-tertiary ${className}`}>
            <div className="max-w-desktop mx-auto">
                <AtPageTitle data-testid="or-catalog-header-title-test-id" className="text-left uppercase lg:normal-case">
                    Top Sellers
                </AtPageTitle>
                <div className="mt-8 lg:mt-12 divide-stroke-secondary divide-x lg:flex lg:items-center lg:justify-end">
                    <label htmlFor="or-catalog-genre-select" className="font-archivo font-bold text-xl leading-6 tracking-sm text-center pr-6" data-testid="or-catalog-genre-select-label-test-id">Genre</label>
                    <AtSelect id="or-catalog-genre-select" className=" py-4 pl-10" data-testid="or-catalog-genre-select-test-id">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </AtSelect>
                </div>
            </div>

        </section>
    );
}
