import styled from "@emotion/styled"
import { colors } from "../../styles"

export const SearchDiv = styled.div`
  display:flex;
  align-items:center;
  // height:40px;
  gap:8px;
  background:white;
  padding:2px;
  width: 40%;
  padding-right:10px;

  border-radius:16px;
  &:focus-within{
    outline: 1px solid ${colors.black.dark};
  }
  @media(max-width:800px){
    width:100%;
  }
`
export const StyledInput = styled.input`
  border-radius: 18px 0px 0px 18px;
  border:none;
  background: ${colors.white};
  color:${colors.black.dark};
  padding:8px 10px;
  padding-left:20px; 
  width:100%;
  &:focus{
    outline: none; 
  }
  font-size:20px;
  
`
export const SearchText = styled.h1`
font-weight: 600;
font-size: 28px;
line-height: 35px;
text-align: center;
`