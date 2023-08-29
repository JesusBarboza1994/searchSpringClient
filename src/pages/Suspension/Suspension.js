import { useEffect } from "react"
import { useAuth } from "../../context/auth-context"
import { BrandCardContainer, Wrapper, MainContainer} from "./styles"
import { getBrands } from "../../services/brand-service"
import BrandCard from "../../components/BrandCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import { StyledMdSearchOff } from "../SearchInterface/styles"


export default function Suspension(){
  const {setBrands, brands, setCurrentBrand} = useAuth()
  useEffect(() => {
    getBrands().then(response=>{
      setBrands(response)
      sessionStorage.setItem("brands", JSON.stringify(response))
      setCurrentBrand(null)
    }).catch(error => { console.log(error) })
  }, [])
  if(!brands) return
  return(
    <Wrapper>
    
      <MainContainer>
        <div className="search">
          <p>Elige tu marca</p>
          <SearchBar/>
        </div>
        {
          brands.length === 0 ?
          <StyledMdSearchOff style={{margin:"auto"}}/> :
          <BrandCardContainer>
            { 
            brands.map(brand =>{
              return <BrandCard key={brand.id} brand={brand}/>
            })
            }
          </BrandCardContainer>
        }
      </MainContainer>
    </Wrapper>
  )
}