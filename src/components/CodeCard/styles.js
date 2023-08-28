import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  width:260px;
  height: 375px;
  border-radius: 12px;
  background:${colors.white};
  box-shadow: 0px 10px 40px rgba(41, 40, 40, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  box-shadow: 0px 5px 10px ${colors.red.medium};
  &:hover{
    scale:1.05;
  }
  div{
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  @media(max-width:500px){
    width:150px;
    height: 216px;
  }
`
export const DivImg = styled.div`
  img{
    height:250px;
  }
  @media(max-width:500px){
    img{
      height: 120px;
    }
  }
`
export const DivCode = styled.div`
  width:100%;
  background: ${colors.red.highlight};
  padding: 9px 36px;
  display:flex;
  align-items:center;
  justify-content:center;
  max-height: 50px;
  border-radius: 10px 10px 0px 0px;
  color: ${colors.white};
  p{
    font-size:24px;
  }
  @media(max-width:500px){
    padding: 4px 36px;
    max-height:30px;
    p{
      font-size: 16px;
    }
  }
`
export const DivDescription = styled.div`
  width:100%;
  background: ${colors.red.highlight};
  padding: 8px 8px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color: ${colors.white};
  border-radius: 0px 0px 10px 10px;
  text-align:center;
  p{
    font-size:16px;
    line-height: 16px;
  }
  @media(max-width:500px){
    p{
      font-size: 12px;
      line-height: 12px;
    }
  }
`