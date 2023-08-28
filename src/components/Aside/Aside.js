import { useAuth } from "../../context/auth-context";
import Filter from "../Filter/Filter";
import { CheckBoxGroup, CleanFilter, FilterContainer, FilterOptionsTitle, FilterTitle, InputDiv, Switch, SwitchSide, Wrapper, YearSelectionDiv } from "./styles";
import {FaFilter} from "react-icons/fa"
import FilterSearch from "../FilterSearch/SearchBar";
import CheckBox from "../CheckBox/CheckBox";
import Input from "../Input";
import { MdArrowForwardIos} from "react-icons/md"
import { useState } from "react";
import { colors } from "../../styles";

export default function Aside(){
  const {versions, positions, filters, setCurrentPage, setFilters, showResponsiveFilter, setCurrentBrand, visibleBrands,visibleModels,setvisibleBrands, setVisibleModels } = useAuth();
  const [rangeYear, setRangeYear] = useState({
    rangeInit:null,
    rangeEnd:null
  })
  const [showYear, setShowYear] = useState(true)
  const handleRangeYear = () =>{
    setFilters({...filters, startYear:rangeYear.rangeInit, endYear:rangeYear.rangeEnd})
  }
  return(
    <Wrapper show={showResponsiveFilter}>
    {
      Object.values(filters).find(filter =>filter !== null) &&
      <FilterOptionsTitle><FaFilter/> Filtros</FilterOptionsTitle>
    }
  <FilterContainer>
    {Object.entries(filters).map(([clave, valor]) => {
      if(filters.startYear && filters.endYear && (clave === "startYear" || clave === "endYear" )) return 
      if(clave==="startYear" && valor) return <Filter key={clave} text={valor} clave={clave} year={"start"} />;
      if(clave==="endYear" && valor) return <Filter key={clave} text={valor} clave={clave} year={"end"} />;
      if (valor) {
        return <Filter key={clave} text={valor} clave={clave} year={null} />;
      }
    })}
    {
      (filters.startYear && filters.endYear) &&
      <Filter key={"both"} text={`${filters.startYear}<= AÑO <= ${filters.endYear}`} year={"both"}/>
    }
  </FilterContainer>
    { Object.values(filters).find(filter =>filter !== null) &&
      <CleanFilter onClick={()=>{setFilters({
        brand: null,
        model: null,
        pos: null,
        startYear: null,
        endYear: null,
        vers: null
      })
      setCurrentBrand(null)
      setCurrentPage(1)
      sessionStorage.setItem("currentPage", 1)
      }}>Borrar los filtros</CleanFilter>
    }
    {
      (!filters.brand ) &&
      <>
        <FilterTitle>MARCA</FilterTitle>
        <FilterSearch setVisibleValues={setvisibleBrands} clave={"brands"}/>
        <CheckBoxGroup style={{overflowY:"auto", maxHeight:"140px"}}>
          {visibleBrands?.map((brand, index) => (
            <CheckBox key={brand + index} text={brand} clave={"brand"} img={brand.img_url}/>
          ))}
        </CheckBoxGroup>
      </>
    }
    {
      (!filters.model && filters.brand) &&
      <>
        <FilterTitle>MODELO</FilterTitle>
        <FilterSearch setVisibleValues={setVisibleModels} clave={"models"}/>
        <CheckBoxGroup style={{overflowY:"auto", maxHeight:"140px"}}>
          {visibleModels?.map((model, index) => (
            <CheckBox key={model + index} text={model} clave={"model"}/>
          ))}
        </CheckBoxGroup>
      </>
    }
    {
      !filters.version &&
      <>
        <FilterTitle>VERSION</FilterTitle>
        <CheckBoxGroup>
          {versions.map((version, index) => (
            <CheckBox key={version + index} text={version} clave={"version"}/>
          ))}
        </CheckBoxGroup>
      </>
    }
    {
      !filters.position &&
      <>
        <FilterTitle>POSICIÓN</FilterTitle>
        <CheckBoxGroup>
          {positions.map((position, index) => (
            <CheckBox key={position + index} text={position} clave={"position"}/>
          ))}
        </CheckBoxGroup>
      </>
    }
    {
      (!filters.startYear && !filters.endYear) &&
      <>
        <FilterTitle>AÑO</FilterTitle>
        <YearSelectionDiv showYear={showYear}>
          <p style={{color:`${showYear ? colors.black.dark: colors.gray.light}`}}>AÑO DEL VEHÍCULO</p>
          <Switch onClick={()=>setShowYear(!showYear)} >
            <SwitchSide showYear={showYear}/>
          </Switch>
          <p style={{color:`${!showYear ? colors.black.dark: colors.gray.light}`}}>RANGO DE AÑOS</p>
        </YearSelectionDiv>
      </>
    }
    {
      (!filters.startYear && showYear) &&
      <Input placeholder="2000" year={"startYear"} typeYear={"year"} />
    }
    {
      ((!filters.startYear || !filters.endYear) && !showYear) &&
      <InputDiv>
        <Input placeholder="2000" year={"startYear"} value={rangeYear.rangeInit} onChange={(e)=>setRangeYear({...rangeYear, rangeInit: (e.target.value)})}/>
        <p>-</p>
        <Input placeholder="2099" year={"endYear"} value={rangeYear.rangeEnd} onChange={(e)=>setRangeYear({...rangeYear, rangeEnd: (e.target.value)})}/>
        <MdArrowForwardIos style={{fontSize:"24px", cursor:"pointer"}} onClick={handleRangeYear} />
      </InputDiv>
    }
    
  </Wrapper>
  )
}