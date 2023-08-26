import { ButtonContainer,  Wrapper } from "./styles"
import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom"



export default function Home(){
  const nav = useNavigate()
  return(

    <Wrapper>
   
      <h1>BIENVENIDOS</h1>
      <ButtonContainer>
        <Button text={"Suspensión"} onClick={()=>nav("/suspension")}/>
        <Button text={"Puertas"} url={"/puertas"}/>      
      </ButtonContainer>
    </Wrapper>
  )
}