import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  // ✅ Agregar producto con la cantidad correcta desde la galería
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + product.quantity, item.stock) } // 🔹 Usa la cantidad seleccionada
            : item
        );
      } else {
        return [...prevCart, { ...product }];
      }
    });
  };

  // ✅ Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ✅ Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // ✅ Actualizar cantidad de productos dentro del carrito
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, Math.min(newQuantity, item.stock)) } // 🔹 Evita valores inválidos
          : item
      )
    );
  };

  // ✅ Finalizar compra correctamente
  const finalizePurchase = () => {
    if (cart.length === 0) return;

    const newPurchase = {
      fecha: new Date().toISOString(),
      productos: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    setPurchaseHistory((prevHistory) => [...prevHistory, newPurchase]);
    setCart([]); // ✅ Vacía el carrito después de la compra
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity, finalizePurchase, purchaseHistory }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
