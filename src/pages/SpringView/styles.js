import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  background: ${colors.black};
  display:grid;
  grid-template-columns:310px 1fr;
  padding: 100px 60px 60px 60px;
  width:100%;
`
export const DivSpring = styled.div`
  display:flex;
  flex-direction:column;

`
export const DivCode = styled.div`
  width: 306px;
  height: 55px;
  border-radius: 10px 10px 0px 0px;
  background: #D3D3D3;
  display:flex;
  justify-content: center;
  align-items:center;
  padding: 12px 108px;
  color: ${colors.black};
  font-weight: 700;
  
`
export const DivModel = styled.div`
  width: 306px;
  height: 85px;
  border-radius: 0px 0px 10px 10px;
  background: #D3D3D3;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding: 8px 41px;
  color: ${colors.black};
  font-weight: 700;
`
export const DivImg = styled.div`
  width: 306px;
  background: white;
  display:flex;
  justify-content:center;
  img{
    height: 315px;
   }
`
export const ButtonWsp = styled.button`
  width: 306px;
  height: 70px;
  border-radius: 30px;
  background: ${colors.red.highlight};
  display:flex;
  // gap:6px;
  margin-top:54px;
  padding: 14px 45px;
  justify-content: space-between;
  align-items:center;
  p{
    color: ${colors.white};
    font-weight: 600;
    font-size: 20px;
  } 
`

