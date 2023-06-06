import React, { createContext, useState } from 'react';

export const WindowElementContext = createContext(null);

export function WindowElementProvider({ children }) {
  const [targetClassName, setTargetClassName] = useState('');

  return (
    <WindowElementContext.Provider value={{ targetClassName, setTargetClassName }}>
      {children}
    </WindowElementContext.Provider>
  );
}