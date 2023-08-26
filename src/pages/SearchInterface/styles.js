import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  background: lightgray;
  height: 100vh;
  display:flex;
  color:${colors.white};
`

export const CodeContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  gap:24px;
  padding: 24px;
`
export const Main = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;  
`


