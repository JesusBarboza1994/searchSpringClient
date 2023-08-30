import styled from "@emotion/styled";
import { colors } from "../../styles";
import { BsTools } from "react-icons/bs";

export const Wrapper = styled.div`
  width:100%;
  display:flex;
  margin-top:64px;
  justifyContent:center;
  align-items:center;
  flex-direction:column;
  gap:48px;
  p{
    color:${colors.gray.medium};
    font-size:48px;
    font-weight:600;
  }
  @media(max-width:550px){
    p{
      color:${colors.gray.medium};
      font-size:36px;
      font-weight:600;
    } 
  }
`
export const StyledTools = styled(BsTools)`
  color:${colors.white};
  font-size:600px; 
  opacity:0.5;
  margin:auto;
  @media(max-width:750px){
    font-size: 400px;
  }
  @media(max-width:500px){
    font-size: 300px;
  }
  @media(max-width:420px){
    font-size: 250px;
  }
`