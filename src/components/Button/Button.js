import { Wrapper } from "./styles";

export default function Button({text, textColor}){
  return(
      <Wrapper style={{color: textColor}}>
          <p>{text}</p>
      </Wrapper>
  )
}