import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  return (
    <AppContext.Provider value={{ images, setImages }}>
      {children}
    </AppContext.Provider>
  );
};