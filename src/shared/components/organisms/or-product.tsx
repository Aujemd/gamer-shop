type OrProductProps = Readonly<React.HTMLAttributes<HTMLUListElement>>;

/**
 * OrProduct component.
 * Displays a list of product cards.
 * @param props - The component props.
 * @returns The OrProduct component.
 */
export default function OrProduct(props: OrProductProps) {
    const { className, children, ...rest } = props;
    return (
        <ul
            {...rest}
            className={`grid grid-cols-1 gap-6 py-8 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:px-0 lg:py-12 items-stretch ${className}`}
        >
            {children}
        </ul>
    );
}
