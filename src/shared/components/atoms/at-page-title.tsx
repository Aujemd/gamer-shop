import type { HTMLAttributes } from "react";

type AtPageTitleProps = Readonly<HTMLAttributes<HTMLHeadingElement>>;

/**
 * Atomic Page Title component.
 * Renders the main title for a page.
 * @param props - The component props.
 * @returns The page title component.
 */
export default function AtPageTitle(props: AtPageTitleProps) {
    const { children, className = "" } = props;

    return (
        <h1 className={`font-archivo font-bold text-2xl leading-7 tracking-sm text-center text-gray-medium lg:text-4xl lg:leading-10 ${className}`} {...props}>
            {children}
        </h1>
    );
}
