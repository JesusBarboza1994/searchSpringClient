import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Suspension from "./pages/Suspension";
import Puertas from "./pages/Puertas/Puertas";
import styled from "@emotion/styled";
import SearchInterface from "./pages/SearchInterface/SearchInterface";
import SpringView from "./pages/SpringView";
import logo from "./assets/logo-transmeta.png"
import { colors } from "./styles";
import { useAuth } from "./context/auth-context";

const Wrapper = styled.div`
  background:${colors.black.medium};
  padding-top: 170px;
  @media(max-width:550px){
    padding-top:130px;
    padding-right:0;
  }
`
const TitleContainer = styled.div`
background: ${colors.red.light};
height: 140px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
width:100%;
padding-right:24px;
top: 30px;
z-index:1;
h1{
  font-size:40px;
  color: white;
}
@media (max-width: 550px){
  height:100px;
}
`
const LogoContainer = styled.div`
  background: ${colors.red.light};
  padding:16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    height:90px;
    // width:120px;
  }
  .brand-logo{
    height:50px;
  }
  @media (max-width: 650px){
    padding-right:12px;
    img{
      height:80px;
      // width:120px;
    }
  }
  @media (max-width: 550px){
    padding-right:0;
    img{
      height:60px;
      // width:120px;
    }
  }
  @media (max-width: 450px){
    
    img{
      height:50px;
    }
    .brand-logo{
      height:30px;
    }
  }
`
function App() {
  const nav = useNavigate()
  const {currentBrand} = useAuth()
  return(
    <Wrapper>
      <TitleContainer>
        {
          currentBrand ? 
          <LogoContainer>
            <img src={logo} alt="logo" onClick={()=>nav("/suspension")}/>
            <img className="brand-logo" src={`https://drive.google.com/uc?export=view&id=${currentBrand}`} alt="sin imagen"/>
          </LogoContainer> :
          <LogoContainer>
            <img src={logo} alt="logo"/>
          </LogoContainer>
        }
      </TitleContainer>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/suspension" element={<Suspension/>} />
        <Route path="/puertas" element={<Puertas/>} />
        <Route path="/codes" element={<SearchInterface/>}/>
        <Route path="/codes/:id" element={<SpringView/>}/>
      </Routes> 
      
    </Wrapper>
    )
}

export default App;
