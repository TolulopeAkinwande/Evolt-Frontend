import React, { createContext, useContext, useState, useEffect } from "react";
import { Products } from "./lib/types";

interface CartContextType {
    cart: Products[];
    cartItems: { [key: string]: number }; // Object to track quantity per item
    addToCart: (product: Products) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Products[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [cartItems, setCartItems] = useState<{ [key: string]: number }>(() => {
        const savedCartItems = localStorage.getItem("cartItems");
        return savedCartItems ? JSON.parse(savedCartItems) : {};
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cart, cartItems]);

    const addToCart = (product: Products) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (!existingItem) {
                return [...prevCart, { ...product, quantity: 1 }];
            }

            return prevCart;
        });

        setCartItems((prevItems) => ({
            ...prevItems,
            [product.id]: (prevItems[product.id] || 0) + 1,
        }));
    };

    const removeFromCart = (id: string | number) => {
      setCartItems((prevItems) => {
          const productId = String(id); // Convert ID to string
          if (!prevItems[productId]) return prevItems;
          
          const updatedItems = { ...prevItems };
          if (updatedItems[productId] > 1) {
              updatedItems[productId] -= 1;
          } else {
              delete updatedItems[productId];
              setCart((prevCart) => prevCart.filter((item) => String(item.id) !== productId)); // Convert item.id to string
          }
          return updatedItems;
      });
  };
  
    const clearCart = () => {
        setCart([]);
        setCartItems({});
    };

    return (
        <CartContext.Provider value={{ cart, cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
