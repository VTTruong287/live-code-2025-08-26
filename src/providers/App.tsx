import React, { useEffect } from "react";
import Inventory from "../core/services/Inventory";

type AppContextType = {
  isLoading?: boolean;
};

const AppContext = React.createContext<AppContextType>({
    isLoading: true,
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = React.useState({
    isLoading: true,
  });

  useEffect(() => {
    // Initialize data
    Inventory.getAll().then(() => {
      setValue({ isLoading: false });
    });
  }, []);

  return <AppContext.Provider value={value}>{value.isLoading ? <div className="p-4 text-center">Loading...</div> : children}</AppContext.Provider>;
};
