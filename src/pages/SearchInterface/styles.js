import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import {MdSearchOff} from "react-icons/md"

export const Wrapper = styled.div`
  background: ${colors.white};
  display:flex;
  color:${colors.white};
  height:100vh;
`

export const CodeContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
  column-gap: 16px;
  row-gap: 20px;
  width:100%;
  justify-items:center;
  padding: 24px 24px 24px 0px;
  overflow-y: auto;
  /* Estilos para la barra lateral */
  &::-webkit-scrollbar {
    width: 8px; /* Ancho de la barra lateral */
  }

  &::-webkit-scrollbar-thumb {
    background-color:${colors.gray.medium};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 4px;
  }
  @media(max-width:900px){
    padding-right:12px;
    padding-left:12px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    gap-row:20px;
  }
  @media(max-width:500px){
    padding-right:12px;
    padding-left:12px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
    gap-row:20px;
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
  justify-content:flex-start;  
  height:100vh;
  /* Estilos para la barra lateral */
  &::-webkit-scrollbar {
    width: 8px; /* Ancho de la barra lateral */
  }

  &::-webkit-scrollbar-thumb {
    background-color:${colors.gray.medium};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 4px;
  }
  @media(max-width:500px){
    padding:12px;
  }
`

export const FilterText = styled.div`
  display:none;
  width:100%;
  padding-right:60px;
  padding-bottom:16px;
  p{
    font-size:16px;
  }
  @media(max-width:890px){
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap: 4px;
    padding-right:20px;
  }
`
export const StyledMdSearchOff = styled(MdSearchOff)`
  color:${colors.white};
  font-size:600px; 
  opacity:0.5;
  @media(max-width:750px){
    font-size: 400px;
  }
  @media(max-width:500px){
    font-size: 300px;
  }
`


