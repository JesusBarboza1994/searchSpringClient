import styled from "@emotion/styled"
import { colors } from "../../styles"

export const FilterSearchDiv = styled.div`
  display:flex;
  align-items:center;
  gap:8px;
  background:white;
  padding:2px;
  width: 70%;
  padding-left:10px;
  margin-top:8px;
  border-radius:16px;
  outline: 1px solid ${colors.black.dark};
`
export const StyledInput = styled.input`
  border-radius: 18px 0px 0px 18px;
  border:none;
  background: ${colors.white};
  color:${colors.black.dark};
  padding:4px 10px;
  padding-left:10px; 
  width:100%;
  &:focus{
    outline: none; 
  }
  font-size:14px;
  
`