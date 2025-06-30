"use client";
import { useEffect, useState } from "react";

/**
 *
 * Custom hook to determine if the component is being rendered on the client side.
 * This is useful for avoiding server-side rendering issues with browser-specific APIs.
 * @returns - Returns true if the component is rendered on the client side,
 * false if it is rendered on the server side.
 */
export function useClient(): boolean {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}
