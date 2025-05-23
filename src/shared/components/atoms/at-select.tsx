import type { SelectHTMLAttributes } from "react";

type AtSelectProps = Readonly<SelectHTMLAttributes<HTMLSelectElement>>;

/**
 * Atomic Select component.
 * Renders a styled select element.
 * @param props - The component props.
 * @returns The select component.
 */
export default function AtSelect(props: AtSelectProps) {
    const { children, className = "", ...rest } = props;

    return (
        <select
            {...rest}
            className={`w-select-custom-width font-archivo text-xl font-normal leading-6 tracking-sm text-left ${className}`}
        >
            {children}
        </select>
    );
}
