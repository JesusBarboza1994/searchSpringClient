import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

export const Wrapper = styled.div`
  display:flex;
  padding: 100px 60px 60px 60px;
  flex-direction:column;
  gap:64px;
  align-items:center;
  margin-top:120px;
  img{
    width:400px;
    height: 97px;

  }
  background: ${colors.black.medium};
  height:100%;
  h1{
    font-size:100px;
    color: white;
    text-shadow: 0px 8px 4px #A4161A;
  }
  @media(max-width: 800px){
    margin-top:0px;
    h1{
      ${typography.head.xl};
      font-weight:600;
    }
  }
  @media(max-width: 500px){
    margin-top: 0px;
    h1{
      ${typography.head.md};
      font-weight:600;
    }

  }
  
`

export const ButtonContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 24px;
  flex-wrap: wrap;
  @media(max-width: 500px){
  }
  @media(max-width: 800px){

  }
`
