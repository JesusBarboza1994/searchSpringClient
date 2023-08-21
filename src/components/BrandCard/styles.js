import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width:240px;
  height: 161px;
  border-radius: 12px;
  border: 3px solid #363644;
  background:white;
  padding: 30px 30px;
  box-shadow: 0px 8px 4px 0px #A4161A;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover{
    scale:1.05;
  }
  div{
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    jsutify-content:center;
    flex-direction: column;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;  
  }
`

