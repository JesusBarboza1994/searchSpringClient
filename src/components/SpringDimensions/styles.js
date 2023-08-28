import styled from "@emotion/styled";
import { colors } from "../../styles";


export const Wrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap:50px;
  align-content: space-around;
  label{
    color:${colors.white};
    font-weight: 400;
    font-style: italic;
  }
  h2{
    font-size: 22px;
    align-items: center;
    display: flex;
  }

  h1{
    color:${colors.white};
    font-size: 22px;
  }
  @media(max-width:1200px){
    justify-content:center;
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
  &:focus{
    outline: none; 
  }
  font-size:16px;
  font-weight: 700;
  padding:0px 14px;
  
`

export const DivInput= styled.div`
  display:flex;
  align-items:center;
  gap: 16px;
  justify-content: space-between;
  @media(max-width:850px){
    display:flex;
    flex-direction:column;
    gap: 6px;
  }

`

export const DivTotal= styled.div`
display:flex;
// flex-direction:column;
height:36px;
gap:16px;
justify-content: center;
align-items: center;
`

export const ButtonWsp = styled.button`
  width: 306px;
  height: 70px;
  border-radius: 30px;
  background: ${colors.red.highlight};
  opacity: ${props =>props.disabled ? "0.5" :"1"};
  display:flex;
  padding: 14px 45px;
  justify-content: space-between;
  align-items:center;
  p{
    color: ${colors.white};
    font-weight: 600;
    font-size: 20px;
  } 
`

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap:16px;
  justify-content: space-between;
  @media(max-width:850px){
    display:grid;
    width:100%;
    justify-content:center;
    grid-template-columns: repeat(auto-fill, 100px);
  }
`
export const DivPrice = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
  align-items:center;
  h2{
    color:${colors.white};
  }
  @media(max-width:1200px){
   flex-direction:column;
   gap:24px; 
  }
`
export const DivData = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  gap:16px;
`

export const DivYunta = styled.div`
  display: flex;
  gap: 12px;
  color:${colors.white};
`

export const DivStock = styled.div`
  width:306px;
  display:flex;
  justify-content:center;
  cursor:pointer;
`