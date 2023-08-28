import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  display:flex;
  gap: 16px;
  align-items:center;
  justify-content:center;
  margin: 12px auto;
  flex-wrap:wrap;
  @media(max-width:500px){
    gap:5px;
  }
`

export const PageBox = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  background: ${(props)=> props.current ? colors.red.highlight :  colors.gray.light};
  color: ${(props) => props.current ? colors.white : colors.black.dark};
  font-weight: 600;
  display:flex;
  align-items:center;
  border-radius: 8px;
  justify-content:center;
  @media(max-width:500px){
    height: 22px;
    width: 22px;
    border-radius: 6px;
    font-size:14px;
  }
`