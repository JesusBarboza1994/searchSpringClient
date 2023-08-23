import { useEffect, useState } from "react"
import { getCode } from "../../services/codes-service"
import { DivCode, DivImg, DivModel, ButtonWsp, Wrapper, DivSpring } from "./styles"
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import {BsWhatsapp} from "react-icons/bs"
import { colors } from "../../styles";
import SpringDimensions from "../../components/SpringDimensions/SpringDimensions";

export default function SpringView(){
  const { id } = useParams();
  const [spring, setSpring] = useState(null)
  const {car} = useAuth();

  useEffect(()=>{
    getCode(id)
    .then((response) =>{
      setSpring(response)
    })
    .catch(error => console.log(error))
  },[])
  return(
    <Wrapper>
    
    {
      spring && 
      <>
      <DivSpring>
        <DivCode>{spring.code.osis_code}</DivCode>
        <DivImg>
          <img src={`https://drive.google.com/uc?export=view&id=${spring.code.img_url}`} alt="sin imagen"/>
        </DivImg>
        <DivModel>
          <p>{spring.code.model}</p>
          <p>año</p>
          <p>{spring.code.position}</p>
        </DivModel>
        <ButtonWsp>
          <BsWhatsapp style={{color:colors.white,fontSize:30}}/>
          <p>HACER PEDIDO</p>
        </ButtonWsp>
        
      </DivSpring>
      <SpringDimensions/>
      </>
      
    }
    
    <p> "SPRING:"{JSON.stringify(spring)}</p>
    <p>"CAR:" {JSON.stringify(car)}</p>
    </Wrapper>
  )
}