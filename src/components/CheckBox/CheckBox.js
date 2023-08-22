import { useAuth } from "../../context/auth-context";
import { CheckBoxInput, Wrapper } from "./styles";

export default function CheckBox({clave, text}){
  const { filters, setFilters} = useAuth()
  const handleChange = () =>{
    console.log("change")
    setFilters({...filters, [clave]: text})
  }

  return(
    <Wrapper>
      <CheckBoxInput type="checkbox" onChange={handleChange}/>
      <p>{text}</p>
    </Wrapper>
  )
}