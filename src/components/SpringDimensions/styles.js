import styled from "@emotion/styled";
import { colors } from "../../styles";


export const Wrapper = styled.div`
  background: ${colors.black.dark};
  display:grid;
  grid-template-columns: 1fr;
  // padding: 100px 60px 60px 60px;
  display:flex;
  // flex-direction:column;
  flex-wrap: wrap;
  gap:50px;
  width:650px;
  align-content: flex-start;
  label{
    color:${colors.white};
    font-weight: 400;
    font-style: italic;
  }
  h2{
    color:green;
    font-size: 22px;
    align-items: center;
    display: flex;
  }

  h1{
    color:${colors.white};
    font-size: 22px;
  }

`

export const StyledInput = styled.input`
  border:none;
  background: ${colors.white};
  width: 100px;
  height: 36px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  color: ${colors.black.dark};
  &:focus{
    outline: none; 
  }
  font-size:16px;
  font-weight: 700;
  padding:0px 14px;
  
`

export const DivInput= styled.div`
display:flex;
flex-direction:column;
height:72px;


`

export const DivTotal= styled.div`
display:flex;
// flex-direction:column;
height:36px;
gap:16px;
justify-content: center;
align-items: center;


`