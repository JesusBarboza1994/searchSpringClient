import { useEffect, useState } from "react";
import { SearchDiv, StyledInput } from "./styles";
import {RiSearchLine} from "react-icons/ri"
import { IoIosArrowBack } from "react-icons/io"
import { useAuth } from "../../context/auth-context";
import { getBrands } from "../../services/brand-service";
import { colors } from "../../styles";

export default function SearchBar(){
  const [search, setSearch] = useState(null)
  const { setBrands} = useAuth()
  let typingTimer; // Variable para el temporizador
  const delayTime = 500; // 1500 ms = 1.5 segundos
  useEffect(()=>{
    clearTimeout(typingTimer); // Reiniciar el temporizador cada vez que se presiona una tecla
    sessionStorage.removeItem("brands")
    typingTimer = setTimeout(function() {
      getBrands(search).then(response=>{
        setBrands(response)
        sessionStorage.setItem("brands", JSON.stringify(response))
      }).catch(error => { console.log(error) }) 
    }, delayTime);
  },[search])


  return(
    <SearchDiv>
      <StyledInput type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      {search ==="" ? <RiSearchLine style={{color: colors.black.light, fontSize:"24"}}/> : 
        <IoIosArrowBack style={{color: colors.black.light, fontSize:"24"}}/>
      }
    </SearchDiv>
  )
}