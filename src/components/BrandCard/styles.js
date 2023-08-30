import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  width:320px;
  height: 200px;
  border-radius: 12px;
  border: 3px solid #363644;
  background:${colors.white};
  padding: 12px 30px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  cursor: pointer;
  align-items: space-between;
  &:hover{
    scale:1.05;
  }
  div{
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction: column;
  }
  img{
    height: 120px;
    object-fit: contain;  
  }
  @media (max-width:1120px){
    width:260px;
    height:150px;
    div{
      justify-content:space-between;
    }
    img{
      height:80px;
    }
  }
  @media(max-width: 700px){
    padding:
  }
`

