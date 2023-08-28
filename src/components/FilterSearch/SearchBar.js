import { useState } from "react";
import { FilterSearchDiv, StyledInput } from "./styles";
import {RiSearchLine} from "react-icons/ri"
import { IoIosArrowBack } from "react-icons/io"
import { colors } from "../../styles";
import { useAuth } from "../../context/auth-context";

export default function FilterSearch({setVisibleValues, clave}){
  const {codes} =useAuth()
  const [search, setSearch] = useState(null)
  const handleChange = (e)=>{
    const value = e.target.value.toUpperCase()
    setSearch(value)
      setVisibleValues(codes[clave].filter(el =>el.includes(value.toUpperCase())))
  }
  return(
    <FilterSearchDiv>
      {search ==="" || search === null ? <RiSearchLine style={{color: colors.black.dark, fontSize:"24"}}/> : 
        <IoIosArrowBack style={{color: colors.black.dark, fontSize:"24"}}/>
      }
      <StyledInput type="text" value={search} onChange={(e)=>handleChange(e)}/>
    </FilterSearchDiv>
  )
}