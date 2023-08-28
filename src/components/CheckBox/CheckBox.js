import { useAuth } from "../../context/auth-context";
import { CheckBoxInput, Wrapper } from "./styles";

export default function CheckBox({clave, text}){
  const { filters, setFilters, setCurrentBrand, brands, setCurrentPage} = useAuth()
  const handleChange = () =>{
    if(clave==="brand"){
      const brand = brands.find(brand => brand.name === text)
      setCurrentBrand(brand.img_url)
    }
    sessionStorage.setItem("filters", JSON.stringify({...filters, [clave]: text}))
    setFilters({...filters, [clave]: text})
    setCurrentPage(1)
    sessionStorage.setItem("currentPage", 1)
  }

  return(
    <Wrapper onClick={handleChange}>
      <CheckBoxInput type="checkbox"/>
      <p>{text}</p>
    </Wrapper>
  )
}