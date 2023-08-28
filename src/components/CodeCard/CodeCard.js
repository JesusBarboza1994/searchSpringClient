import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { Wrapper, DivImg, DivCode, DivDescription } from "./styles";
import notFound from "../../assets/NotFound.png"

export default function CodeCard({code, car, id}){
  const { setCar} = useAuth()
  const nav = useNavigate()
  const handleClick = () =>{
    sessionStorage.removeItem("car")
    setCar(car)
    sessionStorage.setItem("car", JSON.stringify(car))
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
        {
          code.img_url ? 
          <img src={`https://drive.google.com/uc?export=view&id=${code.img_url}`} alt="sin imagen"/>
          :
          <img src={notFound} alt="sin imagen"/>
        }
      </DivImg>
      <DivDescription>
        <p>{car.brand.name} {car.model}</p> 
        <p>{car.init_year} - {car.end_year} {position} {code.version.toUpperCase()}</p>
      </DivDescription>
    </Wrapper>
    )
}