import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

export const Wrapper = styled.aside`
  background: ${colors.white};
  color: ${colors.black.light};
  padding: 12px 24px;
  overflow-y: auto;
  position:relative;
  overflow-x:hidden;
  width:320px;
  z-index:1;
  @media(max-width:900px){
    display:${props=>props.show ? "block": "none"};
    position:absolute;
    height:100%;
    top:170px;
  }
  @media (max-width: 550px){
    top:130px;
  }
`
export const DivFilterContainer =styled.div`
  display:${props => props.resposiveFilter ? "block": "none"}
`

export const FilterContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap:wrap;
  gap:8px;
  position:sticky;
  margin-bottom:8px;
  margin-left:12px;
  // display:${props=>props.show ? "flex": "none"};
`
export const FilterOptionsTitle = styled.div`
  ${typography.head.xxs};
  margin-bottom:8px;
  margin-top:16px;
`
export const FilterTitle = styled.p`
  ${typography.head.xs};
  border-bottom: 1px solid ${colors.black.dark};
  margin-top:12px;
`

export const CleanFilter = styled.p`
  ${typography.head.xxs};   
  text-decoration: underline;
  cursor: pointer;
`
export const CheckBoxGroup = styled.div`
  display:flex;
  flex-direction:column;
  gap: 2px;
  margin-top:12px;
  margin-bottom:12px;
`
export const Switch = styled.div`
  display: flex;
  align-items:center;
  width: 50px;
  background:${colors.gray.light};
  height:30px;
  border-radius:15px;
  position:relative;
  padding-left:4px;
`
export const SwitchSide = styled.div`
  border-radius:50%;
  height:22px;
  position:absolute;
  left: ${props => props.showYear ? "4px" : "24px"};
  width:22px;
  background:${colors.black.light};
`
export const YearSelectionDiv = styled.div`
  display:grid;
  margin-top:12px;
  grid-template-columns: 60px 1fr 60px;
  justify-items:center;
  margin-bottom:12px;
  p{
    font-size:12px;
    font-weight:600;
    line-height:18px;
    text-align:center;
  }
`
export const InputDiv = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  p{
    font-size:50px;
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
  height:20px;
  width:20px;
  top:18px;
  right:18px;
  font-size: 12px;
  @media(min-width:890px){
    display:none;
  }
`
