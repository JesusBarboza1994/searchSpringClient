import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  display:flex;
  gap: 16px;
  align-items:center;
  justify-content:center;
`

export const PageBox = styled.div`
  height: 40px;
  width: 40px;
  background: ${(props)=> props.current ? colors.red.highlight :  colors.gray.light};
  color: ${(props) => props.current ? colors.white : colors.black.dark};
  font-weight: 600;
  display:flex;
  align-items:center;
  border-radius: 8px;
  justify-content:center;
`