import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [brands, setBrands] = useState(null)
  const [car, setCar] = useState(null)
  const [spring, setSpring] = useState(null)
  const [codes, setCodes] = useState(null)
  const [filters, setFilters] = useState({
    brand: null,
    model: null,
    pos: null,
    startYear: null,
    endYear: null,
    vers: null
  })
  const [showFilter, setShowFilter] = useState({
    brand: false,
    model: false,
    pos: false,
    year: false,
    vers: false
  })
  return (
    <AuthContext.Provider
      value={{
       brands,
       codes,
       showFilter,
       car,
       spring,
       setSpring,
       setCar,
       setShowFilter,
       filters,
       setCodes,
       setBrands,
       setFilters
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