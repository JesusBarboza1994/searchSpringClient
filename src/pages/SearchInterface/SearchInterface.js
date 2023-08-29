import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import { CodeContainer, Main, FilterText, Wrapper  } from "./styles";
import { getCodes } from "../../services/codes-service";
import CodeCard from "../../components/CodeCard/CodeCard";
import Aside from "../../components/Aside/Aside";
import Pagination from "../../components/Pagination/Pagination";
import {FaFilter} from "react-icons/fa"
import { colors } from "../../styles";
import {MdSearchOff} from "react-icons/md"
export default function SearchInterface() {
  const { codes, showResponsiveFilter,setShowResponsiveFilter, setTotalPages, setCodes, filters, setCurrentPage, setVersions,setPositions,setvisibleBrands, setVisibleModels, currentPage } = useAuth();
  
  useEffect(() => {
    getCodes({...filters, currentPage})
      .then((response) => {
        sessionStorage.removeItem("codes")
        setCodes(response);
        sessionStorage.setItem("codes", JSON.stringify(response))
        setvisibleBrands(response.brands)
        sessionStorage.removeItem("visibleBrands")
        sessionStorage.setItem("visibleBrands", JSON.stringify(response.brands))
        setVisibleModels(response.models)
        sessionStorage.removeItem("visibleModels")
        sessionStorage.setItem("visibleModels", JSON.stringify(response.models))
        setVersions(response.versions)
        setPositions(response.positions)
        setTotalPages(response.total_pages)
      })
      .catch((error) => console.log(error));
  }, [currentPage]);
  useEffect(() => {
    getCodes({...filters, currentPage: 1})
      .then((response) => {
        sessionStorage.removeItem("codes")
        setCodes(response);
        sessionStorage.setItem("codes", JSON.stringify(response))
        setvisibleBrands(response.brands)
        sessionStorage.removeItem("visibleBrands")
        sessionStorage.setItem("visibleBrands", JSON.stringify(response.brands))
        setVisibleModels(response.models)
        sessionStorage.removeItem("visibleModels")
        sessionStorage.setItem("visibleModels", JSON.stringify(response.models))
        setVersions(response.versions)
        setPositions(response.positions)
        setTotalPages(response.total_pages)
      })
      .catch((error) => console.log(error));
    if(+sessionStorage.getItem("currentPage")>1) return
    setCurrentPage(1)
    sessionStorage.setItem("currentPage", 1)
  }, [filters])
  if(!codes) return
  return (
    <Wrapper>
      <Aside/>
      <Main>
        <FilterText onClick={()=>{
          setShowResponsiveFilter(!showResponsiveFilter)}}>
          <FaFilter style={{color: colors.white, fontSize:"16px"}}/>
          <p>Mostrar filtros</p>
        </FilterText>
        <CodeContainer>
          {codes.codes.length === 0 ?

          <MdSearchOff style={{color:"white", fontSize:600, opacity:0.5}}/> :
          codes.codes.map((code) =>
            code.cars.map((car, i) => (
              <CodeCard code={code} key={`${code.osis_code}+${i}`} car={car} id={code.id}/>
            ))
          )}
        </CodeContainer>
        <Pagination/>
      </Main>
    </Wrapper>
  );
}
