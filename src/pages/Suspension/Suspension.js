import { useEffect } from "react"
import { useAuth } from "../../context/auth-context"
import { BrandCardContainer, Wrapper, MainContainer} from "./styles"
import { getBrands } from "../../services/brand-service"
import BrandCard from "../../components/BrandCard"
import SearchBar from "../../components/SearchBar/SearchBar"


export default function Suspension(){
  const {setBrands, brands, setCurrentBrand} = useAuth()
  useEffect(() => {
    getBrands().then(response=>{
      setBrands(response)
      sessionStorage.setItem("brands", JSON.stringify(response))
      setCurrentBrand(null)
    }).catch(error => { console.log(error) })
  }, [])
  
  return(
    <Wrapper>
    
      <MainContainer>
        <div className="search">
          <p>Elige tu marca</p>
          <SearchBar/>
        </div>
        <BrandCardContainer>
          {brands && brands.map(brand =>{
            return <BrandCard key={brand.id} brand={brand}/>
          })
          }
        </BrandCardContainer>
      </MainContainer>
    </Wrapper>
  )
}