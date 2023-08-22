import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { Wrapper } from "./styles";

export default function BrandCard({brand}){
  const nav = useNavigate()
  const {filters, setFilters} = useAuth()
  function handleBrand(){
    setFilters({...filters, brand: brand.name})
    nav("/search_interface")
  }
  return(
    <Wrapper onClick={handleBrand}>
      <div>
        <img src={`https://drive.google.com/uc?export=view&id=${brand.img_url}`} alt="sin imagen"/>
        <h2>{brand.name}</h2>
      </div>
    </Wrapper>
    )
}