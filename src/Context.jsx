import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const AppContext = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        showModal,
        setShowModal,
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
