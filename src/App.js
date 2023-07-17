import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Suspension from "./pages/Suspension";
import Puertas from "./pages/Puertas/Puertas";
import styled from "@emotion/styled";
import SearchInterface from "./pages/SearchInterface/SearchInterface";
function App() {
  const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    height:100vh;
  `
  return(
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/suspension" element={<Suspension/>} />
        <Route path="/puertas" element={<Puertas/>} />
        <Route path="/search_interface" element={<SearchInterface/>}/>
      </Routes>
    </Wrapper>
    )
}

export default App;
