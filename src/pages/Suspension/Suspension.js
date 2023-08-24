import { useEffect } from "react"
import { useAuth } from "../../context/auth-context"
import { BrandCardContainer, Wrapper, TitleContainer, MainContainer} from "./styles"
import { getBrands } from "../../services/brand-service"
import BrandCard from "../../components/BrandCard"
import SearchBar from "../../components/SearchBar/SearchBar"


export default function Suspension(){
  const {setBrands, brands} = useAuth()
  useEffect(() => {
    getBrands().then(response=>{
      setBrands(response)
    }).catch(error => { console.log(error) })
  }, [])
  
  return(
    <Wrapper>
    
      <MainContainer>
        <div className="search">
          <p>Elije tu marca</p>
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