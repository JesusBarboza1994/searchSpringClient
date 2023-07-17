import { StyledLink, Wrapper } from "./styles";

export default function Button({text, url}){
  return(
    <StyledLink to={url}>
      <Wrapper>
        <p>{text}</p>
      </Wrapper>
    </StyledLink>
  )
}