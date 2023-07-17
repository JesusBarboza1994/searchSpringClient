import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [brands, setBrands] = useState(null)
  const [brand, setBrand] = useState(null)
  const [codes, setCodes] = useState(null)
  return (
    <AuthContext.Provider
      value={{
       brands,
       brand,
       codes,
       setBrand,
       setCodes,
       setBrands
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };