import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

export const Wrapper = styled.div`
  background: ${colors.black.medium};
  padding: 0 60px 60px 60px;
  width:100%;
  p{
    color: white;
  }
  @media(max-width:500px){
    padding: 0 24px 60px 24px;
  }
`
export const BrandCardContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  row-gap:32px;
  justify-items:center;

`

export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin:auto;
  max-width:1400px;
  padding: 42px auto;
  gap:84px;
  margin-top:40px;
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
  @media(max-width:800px){
    gap:40px;
    .search{
      flex-direction:column;
      justify-content: center;
      margin: auto;
    }
  }
`
