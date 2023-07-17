import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { Wrapper } from "./styles";

export default function BrandCard({brand}){
  const nav = useNavigate()
  const {setBrand} = useAuth()
  function handleBrand(){
    setBrand(brand.name)
    nav("/search_interface")
  }
  return(
    <Wrapper onClick={handleBrand}>
      <div>
        <img src={`https://drive.google.com/uc?export=view&id=${brand.img_url}`} alt="sin imagen"/>
      </div>
      <h2>{brand.name}</h2>
    </Wrapper>
    )
}