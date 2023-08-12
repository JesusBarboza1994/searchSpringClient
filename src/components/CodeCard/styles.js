import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  width:160px;
  height: 260px;
  border-radius: 12px;
  border: 2px solid gray;
  background:white;
  box-shadow: 0px 10px 40px rgba(41, 40, 40, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  &:hover{
    scale:1.05;
  }
  div{
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
`
export const DivImg = styled.div`
  // height:50%;
  img{
    height:180px;
  }
`
export const DivCode = styled.div`
  width:100%;
  background: ${colors.pink.medium};
  padding: 9px 36px;
  display:flex;
  align-items:center;
  justify-content:center;
  max-height: 30px;
  border-radius: 10px 10px 0px 0px;
  color: ${colors.white};
`
export const DivDescription = styled.div`
  width:100%;
  background: ${colors.pink.medium};
  padding: 8px 8px;
  display:flex;
  align-items:center;
  justify-content:center;
  color: ${colors.white};
  border-radius: 0px 0px 10px 10px;
  text-align:center;
  p{
    font-size:10px;
    line-height: 15px;
  }
  `