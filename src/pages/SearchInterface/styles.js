import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles";

export const Wrapper = styled.div`
  background: ${colors.white};
  display:flex;
  color:${colors.white};
  height:100vh;
`

export const CodeContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  column-gap: 16px;
  row-gap: 20px;
  width:100%;
  justify-items:center;
  padding: 24px 24px 24px 0px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }
`
export const Main = styled.div`
  display:flex;
  width:100%;
  padding:24px;
  padding-bottom:0px;
  background:${colors.black.medium};
  padding-left:48px;
  flex-direction:column;
  padding-top:220px;
  justify-content:flex-start;  
  height:100%;
  
`

export const SearchText = styled.p`
  color:${colors.black.dark};
  ${typography.head.sm}
`


