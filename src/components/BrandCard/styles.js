import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width:200px;
  height: 250px;
  border-radius: 12px;
  border: 2px solid gray;
  background:white;
  padding: 20px 20px;
  box-shadow: 0px 10px 40px rgba(41, 40, 40, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  &:hover{
    scale:1.05;
  }
  div{
    height:100%;
    display:flex;
    align-items:center;
    jsutify-content:center;
  }
`

