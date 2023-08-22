import { useAuth } from "../../context/auth-context";
import { StyledInput } from "./styles"
export default function Input({year}){
  const { filters, setFilters} = useAuth()
  let typingTimer; // Variable para el temporizador
  const delayTime = 1000; // 1500 ms = 1.5 segundos
  const handleInput = (e) =>{
    clearTimeout(typingTimer); // Reiniciar el temporizador cada vez que se presiona una tecla
    typingTimer = setTimeout(function() {
      console.log(e.target.value)
      setFilters({...filters, [year]: e.target.value})
    }, delayTime);
  }
  return(
    <StyledInput type="number" onKeyUp={handleInput}/>
  )
}