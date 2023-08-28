import { useAuth } from "../../context/auth-context";
import { StyledInput } from "./styles"
export default function Input({year, placeholder="2020", typeYear, onChange}){
  const { filters, setFilters} = useAuth()
  let typingTimer; // Variable para el temporizador
  const delayTime = 1000; // 1500 ms = 1.5 segundos
  const handleInput = (e) =>{
    if(typeYear === "year"){
      clearTimeout(typingTimer); // Reiniciar el temporizador cada vez que se presiona una tecla
      typingTimer = setTimeout(function() {
        sessionStorage.setItem("filters", JSON.stringify({...filters, startYear: e.target.value}))
        setFilters({...filters, startYear: e.target.value})
      }, delayTime);
    }
  }
  return(
    <StyledInput type="tel" onKeyUp={handleInput} placeholder={placeholder} onChange={onChange}/>
  )
}