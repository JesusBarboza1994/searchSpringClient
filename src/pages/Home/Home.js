import { ButtonContainer, Wrapper } from "./styles"
import logo from "../../assets/logo-transmeta.png"
import Button from "../../components/Button/Button"
import { CardLogo } from "../../components/TarjetaLogo/TarjetaLogo"

export default function Home(){

  return(
    <Wrapper>
      <img src={logo} alt="logo"/>
      <h1>BIENVENIDOS</h1>
      <ButtonContainer>
        <Button text={"Suspensión"} url={"/suspension"}/>
        <Button text={"Puertas"} url={"/puertas"}/>      
      </ButtonContainer>
      <CardLogo/>
    </Wrapper>
  )
}