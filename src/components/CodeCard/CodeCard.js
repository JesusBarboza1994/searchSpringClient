import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { Wrapper, DivImg, DivCode, DivDescription } from "./styles";

export default function CodeCard({code, car}){
  console.log(code)
  const nav = useNavigate()
  // const {setBrand} = useAuth()
  // function handleBrand(){
  //   setBrand(brand.name)
  //   nav("/search_interface")
  // }
  let position = "";
  if(code.position){
    if(code.position === "front") position = "DEL"
    if(code.position === "rear") position = "POST"
  }
  if(!code.version) code.version = ""
  return(
    <Wrapper >
      <DivCode>
        <p>{code.osis_code}</p>
      </DivCode>
      <DivImg>
        <img src={`https://drive.google.com/uc?export=view&id=${code.img_url}`} alt="sin imagen"/>
      </DivImg>
      <DivDescription>
        <p>{car.brand.name} {car.model} {car.year} {position} {code.version.toUpperCase()}</p>
      </DivDescription>
    </Wrapper>
    )
}