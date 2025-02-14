import React, { createContext, useContext, useState } from "react";

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addToHistory = (cart) => {
    const newPurchase = {
      id: new Date().getTime(),
      date: new Date().toLocaleString(),
      products: [...cart],
    };
    setHistory([...history, newPurchase]);
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
