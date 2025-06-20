"use client";
import { useCatalog, useCatalogFiltersDropdown } from "@/catalog";
import { MlDropdown } from "@/shared";

/**
 * CatalogFiltersDropdown component.
 * Displays a dropdown for filtering catalog items by genre.
 * @returns The catalog filters dropdown component.
 */
export default function CatalogFiltersDropdown() {
    const { selectedFilter, handleDropdownChange } = useCatalogFiltersDropdown();

    const { availableFilters } = useCatalog();

    return (
        <div className="mt-8 lg:mt-12 divide-stroke-secondary divide-x lg:flex lg:items-center lg:justify-end">
            <label htmlFor="catalog-header-genre-ml-dropdown" className="font-archivo font-bold text-xl leading-6 tracking-sm text-center pr-6" data-testid="catalog-header-genre-ml-dropdown-label-test-id">Genre</label>
            <MlDropdown
                value={selectedFilter}
                id="catalog-header-genre-ml-dropdown"
                className=" py-4 pl-10"
                data-testid="catalog-header-genre-ml-dropdown-test-id"
                onChange={handleDropdownChange}
            >
                {
                    availableFilters.map(filter => (
                        <option
                            key={filter}
                            value={filter}
                            aria-label={filter}
                        >
                            {filter}
                        </option>

                    ))
                }
                <option value="">All</option>
            </MlDropdown>
        </div>
    );
};
