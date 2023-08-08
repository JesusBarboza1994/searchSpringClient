import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 200px;
  border-radius:20px;
  border:6px solid black;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 16px 32px;
  p{
    font-size:24px;
    font-weight: 700;
  }
  &:hover{
    color:white;
    border:2px solid white;
  }
`
  
export const StyledLink = styled(Link)`
  text-decoration:none;
  color: black;
`