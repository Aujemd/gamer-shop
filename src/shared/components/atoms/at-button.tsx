import type { ButtonHTMLAttributes } from "react";

type AtButtonProps = Readonly<ButtonHTMLAttributes<HTMLButtonElement>>;

/**
 * Atomic Button component.
 * Renders a styled button element.
 * @param props - Button properties.
 * @returns A button element with the specified properties.
 */
export default function AtButton(props: Readonly<AtButtonProps>) {
    const { className = "", children, ...rest } = props;
    return (
        <button

            className={`font-archivo font-bold text-base leading-4 tracking-sm text-center rounded-lg ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
