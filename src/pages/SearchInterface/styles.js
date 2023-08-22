import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles";

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

export const Aside = styled.aside`
  background: ${colors.black.light};
  display:flex;
  flex-direction:column;
  padding: 12px 32px;
  width:300px;
`

export const FilterTitle = styled.p`
  ${typography.head.xs};
  border-bottom: 1px solid ${colors.white};
`

export const FilterContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap:wrap;
  gap:8px;
`