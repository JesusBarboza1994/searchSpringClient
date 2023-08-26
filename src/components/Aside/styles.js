import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

export const FilterContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap:wrap;
  gap:8px;
  margin-bottom:8px;
  margin-left:12px;
`
export const FilterOptionsTitle = styled.div`
  ${typography.head.xxs};
  margin-bottom:8px;
  margin-top:16px;
`
export const FilterTitle = styled.p`
  ${typography.head.xs};
  border-bottom: 1px solid ${colors.black.dark};
  margin-top:12px;
`

export const Wrapper = styled.aside`
  background: ${colors.white};
  color: ${colors.black.light};
  display:flex;
  flex-direction:column;
  padding: 12px 32px;
  width:300px;
`
export const CleanFilter = styled.p`
  ${typography.head.xxs};   
  text-decoration: underline;
  cursor: pointer;
`
export const CheckBoxGroup = styled.div`
  display:flex;
  flex-direction:column;
  gap: 2px;
  margin-top:12px;
  margin-bottom:12px;
`