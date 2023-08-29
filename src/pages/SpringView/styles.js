import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  background: ${colors.black.medium};
  display:grid;
  grid-template-columns:405px 1fr;
  padding: 60px 60px 60px 60px;
  max-width:1200px;
  margin:auto;
  grid-gap: 100px;
  height:100%;
  @media(max-width:1200px){
    grid-gap:50px;
  }
  @media(max-width:850px){
    width:100%;
    display:flex;
    flex-direction:column;
    margin:auto;
    align-items:center;
    padding:40px;
  }
  @media(max-width: 550px){
    padding-top:20px;
  }
`
export const DivSpring = styled.div`
  display:flex;
  flex-direction:column;
  @media(max-width:850px){
    width:100%;
    max-width:300px;
    p{
      font-size:16px;
    }
  }
`
export const DivCode = styled.div`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  background: ${colors.red.highlight};
  display:flex;
  justify-content: center;
  align-items:center;
  padding: 24px 108px;
  color: ${colors.white};
  font-weight: 600;
  p{
    font-size:24px;
  }
  @media(max-width:850px){
    padding: 8px 0;
  }
`
export const DivModel = styled.div`
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  background: ${colors.red.highlight};
  display:flex;
  padding: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: ${colors.white};
  font-weight: 600;
  p{
    font-size:20px;
  }
  @media(max-width:850px){
    padding: 8px 0;
    p{
      font-size:16px;
    }
  }
`
export const DivImg = styled.div`
  width: 100%;
  background: white;
  padding: 16px 0;
  display:flex;
  justify-content:center;
  img{
    height: 450px;
   }
  @media(max-width:850px){
    img{
      height: 240px;
     }  
  }
`

export const MirrorScreen = styled.div`
   position: absolute;
   width:100%;
   height:120vh;
   top:0;
   z-index:1;
   opacity:0.6;
   background:${colors.black.light};
   display:${props=>props.showModal ? "flex": "none"};
   align-items:center;
   justify-content:center;
   @media(max-width:1200px){
    height:120vh;
   }
   @media(max-width:850px){
    height:150vh;
   }
`
export const Modal = styled.div`
  display:${props=>props.showModal ? "flex": "none"};
  position:absolute;
  top:0;
  width:100%;
  height:100%;
  align-items:center;
  justify-content:center;

`

export const TableDiv = styled.div`
  width:750px;
  height:460px;
  color:${colors.black.dark};
  background:${colors.black.medium};
  z-index:2;
  border-radius:20px;
  position:relative;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  gap: 16px;
  h3{
    color: ${colors.white};
    font-size:24px;
  }
  @media(max-width:800px){
    width: 600px;
    height:400px;
    h3{
      font-size:20px;
    }
  }
  @media(max-width:650px){
    width: 450px;
    height: 310px;
    h3{
      font-size:18px;
    }
  }
  @media(max-width:450px){
    width: 360px;
    height:250px;
    justify-content:flex-end;
  }
`

export const TableHeader = styled.tr`
  background:${colors.gray.light};
`
export const TableRow = styled.tr`
  background:${colors.white};
`
export const Table = styled.table`
  border-collapse: collapse;
  width:550px;
  height:220px;
  text-align:center;
  th, td {
  padding: 4px; /* Espaciado interno de las celdas */
  text-align: center; /* Alineación de texto */
  }
  tr {
      border-bottom: 2px solid black; /* Agregar borde inferior solo a las filas */
  }
  td {
      border-right: none; /* Eliminar borde derecho de las celdas de datos */
  }
  @media(max-width:800px){
    width: 400px;
    font-size: 12px;
    th, td {
      padding: 0px;
      max-width:150px;
    }
  }
  @media(max-width:650px){
    width: 350px;
    font-size: 12px;
  }
  @media(max-width:450px){
    width: 300px;
    font-size: 10px;
    height:160px;
    td, th{
      height:30px;
    }
  }
`
export const Close = styled.div`
  position:absolute;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:800;
  background:${colors.gray.light};
  cursor:pointer;
  // @media(max-width:650px){
    height:20px;
    width:20px;
    top:18px;
    right:18px;
    font-size: 12px;
  // }
`


