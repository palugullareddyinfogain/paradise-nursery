import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (plant) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === plant.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...plant, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, amount) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
