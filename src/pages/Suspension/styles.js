import styled from "@emotion/styled";
import { typography } from "../../styles";

export const Wrapper = styled.div`
  background: black;
  padding: 100px 60px 60px 60px;
  width:100%;
  p{
    color: white;
  }
  
`
export const BrandCardContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap:40px;

`

export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding: 42px 185px;
  gap:84px;
  .search{
    display:flex;
    align-items:center;
    gap:12px;
    width: 80%;
  }
  p{
    ${typography.text["xl"]}
    font-weight: 700;
    // width: 20%;
  }
`
