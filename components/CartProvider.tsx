"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  weight: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, weight: string) => void;
  updateQuantity: (id: string, weight: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("emperorakbar-cart");
    if (savedCart) {
      try {
        // eslint-disable-next-line
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from local storage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("emperorakbar-cart", JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addToCart = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id && item.weight === newItem.weight
      );

      if (existingItemIndex >= 0) {
        // Item exists, increment quantity (must return new object so StrictMode double-invocations don't mutate!)
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + newItem.quantity,
        };
        return updatedItems;
      } else {
        // Item doesn't exist, add to array
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (id: string, weight: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.weight === weight))
    );
  };

  const updateQuantity = (id: string, weight: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, weight);
      return;
    }
    
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const index = updatedItems.findIndex(
        (item) => item.id === id && item.weight === weight
      );
      if (index >= 0) {
        updatedItems[index].quantity = quantity;
      }
      return updatedItems;
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  
  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
