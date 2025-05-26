/**
 * Formats a number as a currency string.
 * @param amount - The amount to format.
 * @param locale - The locale to use for formatting (default is "en-US").
 * @param currency - The currency code to use for formatting (default is "USD").
 * @returns The formatted currency string.
 */
export function formatCurrency(amount: number, locale: string = "en-US", currency: string = "USD"): string {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(amount);
}
