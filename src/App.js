import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Suspension from "./pages/Suspension";
import Puertas from "./pages/Puertas/Puertas";
import styled from "@emotion/styled";
import SearchInterface from "./pages/SearchInterface/SearchInterface";
import SpringView from "./pages/SpringView";
import logo from "./assets/logo-transmeta.png"
import { colors } from "./styles";

const Wrapper = styled.div`
  height:100vh;
  background:${colors.black.medium};
`
const TitleContainer = styled.div`
background: ${colors.red.light};
height: 160px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
width:100%;
top: 55px;
z-index:1;
h1{
  font-size:40px;
  color: white;
}
@media (max-width: 500px){

}
`
const LogoContainer = styled.div`
  background: ${colors.red.light};
  padding:32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    height:100%;
  }
`
function App() {
  const location = useLocation()
  return(
    <Wrapper>
        <TitleContainer>
          {location.pathname ==="/suspension"? 
          <h1>SUSPENSIÓN</h1>:
          location.pathname ==="/"?
          <LogoContainer>
          <img src={logo} alt="logo"/>
          </LogoContainer>:<p>Holaa</p>
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
