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
        <select className={`w-select-custom-width p-4 font-archivo text-xl font-normal leading-6 tracking-sm text-left ${className}`} {...rest}>
            {children}
        </select>
    );
}
