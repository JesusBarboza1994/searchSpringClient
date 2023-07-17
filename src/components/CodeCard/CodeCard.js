import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { Wrapper } from "./styles";

export default function CodeCard({code}){
  const nav = useNavigate()
  // const {setBrand} = useAuth()
  // function handleBrand(){
  //   setBrand(brand.name)
  //   nav("/search_interface")
  // }
  return(
    <Wrapper >
      <h2>{code.osis_code}</h2>
      <p>{code.position}</p>
      <p>S/ {code.price}</p>
      <p>{code.init_year}</p>
      <p>{code.end_year}</p>
    </Wrapper>
    )
}