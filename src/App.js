import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Suspension from "./pages/Suspension";
import Puertas from "./pages/Puertas/Puertas";
import styled from "@emotion/styled";
import SearchInterface from "./pages/SearchInterface/SearchInterface";
import SpringView from "./pages/SpringView";
function App() {
  const Wrapper = styled.div`
    // max-width: 1200px;
    margin: 0 auto;
    height:100vh;
  `
  return(
    <Wrapper>
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
