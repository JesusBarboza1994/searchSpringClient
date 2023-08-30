import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { Wrapper } from "./styles";
import { useEffect, useState } from "react";
import loading from "../../assets/loading.gif"

export default function BrandCard({brand}){
  const nav = useNavigate()
  const {filters, setFilters, setCurrentBrand} = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const image = new Image();
    image.src = `https://drive.google.com/uc?export=view&id=${brand.img_url}`; // Reemplaza con la URL de tu imagen
    image.onload = () => {
      setIsLoading(false);
    };
  }, []);
  function handleBrand(){
    setFilters({...filters, brand: brand.name})
    setCurrentBrand(brand.img_url)
    nav("/codes")
  }
  return(
    <Wrapper onClick={handleBrand}>
      <div>
        {
          isLoading ?
          <img src={loading} alt="sin imagen"/> :
          <img src={`https://drive.google.com/uc?export=view&id=${brand.img_url}`} alt="sin imagen"/>
        }
        <h2>{brand.name}</h2>
      </div>
    </Wrapper>
    )
}