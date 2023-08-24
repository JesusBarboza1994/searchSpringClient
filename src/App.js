import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Suspension from "./pages/Suspension";
import Puertas from "./pages/Puertas/Puertas";
import styled from "@emotion/styled";
import SearchInterface from "./pages/SearchInterface/SearchInterface";
import SpringView from "./pages/SpringView";
import logo from "./assets/logo-transmeta.png"

const Wrapper = styled.div`
  margin: 0 auto;
  height:100vh;
  padding: 100px 60px 60px 60px;
`
const TitleContainer = styled.div`
background: #BA181B;
height: 130px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
h1{
  font-size:40px;
  color: white;
}
`
const LogoContainer = styled.div`
  background: #BA181B;
  height: 130px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`
function App() {
  const location = useLocation()
  console.log(location.pathname)
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
