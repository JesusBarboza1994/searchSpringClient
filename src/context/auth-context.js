import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [brands, setBrands] = useState(JSON.parse(sessionStorage.getItem("brands")) || null)
  const [car, setCar] = useState(JSON.parse(sessionStorage.getItem("car"))|| null)
  const [spring, setSpring] = useState(JSON.parse(sessionStorage.getItem("spring"))|| null)
  const [codes, setCodes] = useState(JSON.parse(sessionStorage.getItem("codes"))|| null)
  const [visibleBrands, setvisibleBrands] = useState(JSON.parse(sessionStorage.getItem("visibleBrands")) || [])
  const [visibleModels, setVisibleModels] = useState(JSON.parse(sessionStorage.getItem("visibleModels")) || [])
  const [versions, setVersions] = useState(JSON.parse(sessionStorage.getItem("versions")) || [])
  const [currentPage, setCurrentPage] = useState(+sessionStorage.getItem("currentPage") ||1)
  const [totalPages, setTotalPages] = useState(JSON.parse(sessionStorage.getItem("totalPages"))|| null)
  const [positions, setPositions] = useState(JSON.parse(sessionStorage.getItem("positions")) || [])
  const [currentBrand, setCurrentBrand] = useState(JSON.parse(sessionStorage.getItem("currentBrand"))|| null)
  const [showReponsiveFilter, setshowReponsiveFilter] = useState(false)
  const [filters, setFilters] = useState(JSON.parse(sessionStorage.getItem("filters")) ||{
    brand: null,
    model: null,
    pos: null,
    startYear: null,
    endYear: null,
    vers: null
  })
  const [showFilter, setShowFilter] = useState(JSON.parse(sessionStorage.getItem("showFilter")) ||{
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
       visibleModels,
       versions,
       totalPages,
       currentPage,
       currentBrand,
       showReponsiveFilter,
       setshowReponsiveFilter,
       setCurrentBrand,
       setCurrentPage,
       setTotalPages,
       setVersions,
       positions,
       setPositions,
       visibleBrands,
       setvisibleBrands,
       setVisibleModels,
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