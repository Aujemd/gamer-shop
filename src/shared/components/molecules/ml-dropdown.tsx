import type { SelectHTMLAttributes } from "react";

type MlDropdownProps = Readonly<SelectHTMLAttributes<HTMLSelectElement>>;

/**
 * Molecule Dropdown component.
 * Renders a custom select dropdown with specific styles.
 * It accepts all standard select attributes and applies custom styles.
 * @param props - The component props.
 * @returns The select component.
 */
export default function MlDropdown(props: MlDropdownProps) {
    const { children, className = "", ...rest } = props;

    return (
        <select
            {...rest}
            className={`w-at-select-custom-width font-archivo text-xl font-normal leading-6 tracking-sm text-left ${className}`}
        >
            {children}
        </select>
    );
}
