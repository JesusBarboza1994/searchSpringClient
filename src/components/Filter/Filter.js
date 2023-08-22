import { useAuth } from "../../context/auth-context";
import { Wrapper } from "./styles";

export default function Filter({clave, text, year}){
  const { filters, setFilters, setShowFilter, showFilter } = useAuth()
  const handleClosed = () => {
    if(year ==="both"){
      setFilters({...filters, startYear: null, endYear: null})
      setShowFilter({...showFilter, startYear: false, endYear: false})
    }else{
      setFilters({...filters, [clave]: null})
      setShowFilter({...showFilter, [clave]: false})
    }
    }  
  if(year==="start"){
    return(
      <Wrapper>
      <p>AÑO &gt;=  {text} <span onClick={handleClosed}>X</span></p>
    </Wrapper>
    )
  }
  if(year==="end"){
    return(
      <Wrapper>
      <p>AÑO  &lt;= {text} <span onClick={handleClosed}>X</span></p>
    </Wrapper>
    )
  }
  if(year==="both"){
    return(
      <Wrapper>
      <p>{text} <span onClick={handleClosed}>X</span></p>
    </Wrapper>
    )
  }
  return(
    <Wrapper>
      <p>{text} <span onClick={handleClosed}>X</span></p>
    </Wrapper>
  )
}