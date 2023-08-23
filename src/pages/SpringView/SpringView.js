import { useEffect, useState } from "react"
import { getCode } from "../../services/codes-service"
import { Wrapper } from "./styles"
import { useParams } from "react-router-dom";

export default function SpringView(){
  const { id } = useParams();
  const [spring, setSpring] = useState(null)
  useEffect(()=>{
    getCode(id)
    .then((response) =>{
      setSpring(response)
    })
    .catch(error => console.log(error))
  },[])
  return(
    <Wrapper>
      <p>{JSON.stringify(spring)}</p>
    </Wrapper>
  )
}