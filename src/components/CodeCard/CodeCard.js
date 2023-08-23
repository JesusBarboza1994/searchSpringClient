import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { Wrapper, DivImg, DivCode, DivDescription } from "./styles";

export default function CodeCard({code, car, id}){
  const nav = useNavigate()
  // const {setBrand} = useAuth()
  // function handleBrand(){
  //   setBrand(brand.name)
  //   nav("/search_interface")
  // }
  const handleClick = () =>{
    //lksdvnsdklfjsdjfklsdjf
    nav(`${id}`)
  }
  let position = "";
  if(code.position) position = code.position
  if(!code.version) code.version = ""
  return(
    <Wrapper onClick={handleClick}>
      <DivCode>
        <p>{code.osis_code}</p>
      </DivCode>
      <DivImg>
        <img src={`https://drive.google.com/uc?export=view&id=${code.img_url}`} alt="sin imagen"/>
      </DivImg>
      <DivDescription>
        <p>{car.brand.name} {car.model}</p> 
        <p>{car.init_year} - {car.end_year} {position} {code.version.toUpperCase()}</p>
      </DivDescription>
    </Wrapper>
    )
}