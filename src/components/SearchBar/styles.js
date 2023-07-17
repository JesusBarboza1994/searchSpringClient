import styled from "@emotion/styled"

export const SearchDiv = styled.div`
  display:flex;
  align-items:center;
  gap:8px;
  background:white;
  padding:4px;
  width: 300px;
  padding-left:10px;
  border-radius:6px;
  // outline: 1px solid black;
  &:focus-within{
    outline: 2px solid black;
  }
`
export const StyledInput = styled.input`
  border:none;
  background: white;
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