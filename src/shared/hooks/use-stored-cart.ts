"use client";
import { useEffect, useState } from "react";

import type { Game } from "@/utils/endpoint";

export const CART_ITEMS_KEY = "cartItems";

/**
 * Custom hook to manage the shopping cart stored in local storage.
 * Provides functionality to add, remove, and check items in the cart.
 * @returns An object containing the cart items, functions to add and remove items, and a check for item existence.
 */
export function useStoredCart() {
    const [cartItems, setCartItems] = useState<Game[]>(() => {
        try {
            const storedCartItems = localStorage.getItem(CART_ITEMS_KEY);
            return storedCartItems ? JSON.parse(storedCartItems) : [];
        }
        catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    const addItemToCart = (item: Game) => {
        setCartItems(prev =>
            prev.some(cartItem => cartItem.id === item.id)
                ? prev
                : [...prev, item],
        );
    };

    const removeItemFromCart = (itemId: string) => {
        setCartItems(prev => prev.filter(cartItem => cartItem.id !== itemId));
    };

    const isItemInCart = (itemId: string) => cartItems.some(cartItem => cartItem.id === itemId);

    return {
        cartItems,
        isItemInCart,
        addItemToCart,
        removeItemFromCart,
    };
}
