import { ButtonContainer, LogoContainer, Wrapper } from "./styles"
import logo from "../../assets/logo-transmeta.png"
import Button from "../../components/Button/Button"
import { LogoCard } from "../../components/LogoCard/LogoCard"
import { useNavigate } from "react-router-dom"



export default function Home(){
  const nav = useNavigate()
  return(

    <Wrapper>
      <LogoContainer>
        <img src={logo} alt="logo"/>
      </LogoContainer>
      <h1>BIENVENIDOS</h1>
      <ButtonContainer>
        <Button text={"Suspensión"} onClick={()=>nav("/suspension")}/>
        <Button text={"Puertas"} url={"/puertas"}/>      
      </ButtonContainer>
      {/* <LogoCard/> */}
    </Wrapper>
  )
}