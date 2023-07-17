import { useEffect, useState } from "react";
import { SearchDiv, StyledInput } from "./styles";
import {RiSearchLine} from "react-icons/ri"
import { IoIosArrowBack } from "react-icons/io"
import { useAuth } from "../../context/auth-context";
import { getBrands } from "../../services/brand-service";

export default function SearchBar(){
  const [search, setSearch] = useState(null)
  const { setBrands} = useAuth()
  useEffect(()=>{
    getBrands(search).then(response=>{
      setBrands(response)
    }).catch(error => { console.log(error) }) 
  },[search])
  return(
    <SearchDiv>
      {search ==="" ? <RiSearchLine style={{color: "lightgray", fontSize:"24"}}/> : 
        <IoIosArrowBack style={{color: `lightgray`, fontSize:"24"}}/>
      }
      <StyledInput type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={"Search"}/>
    </SearchDiv>
  )
}