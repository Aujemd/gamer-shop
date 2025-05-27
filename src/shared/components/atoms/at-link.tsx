import type { LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";

import Link from "next/link";

type AtLinkProps = LinkProps &
    Readonly<AnchorHTMLAttributes<HTMLAnchorElement>>;

/**
 * Atomic Link component.
 * Renders a Next.js Link with custom styles and props.
 * @param props - The component props.
 * @returns The link component.
 */
export default function AtLink(props: AtLinkProps) {
    const { children, className = "", ...rest } = props;

    return (
        <Link {...rest} className={`font-archivo font-medium text-base leading-4 tracking-normal ${className}`}>
            {children}
        </Link>
    );
}
