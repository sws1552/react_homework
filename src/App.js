import React from "react";
import styled from "styled-components";
import Start from "./Start";
import {Route, Routes} from "react-router-dom";
import Question from "./Question";

function App() {
  
  return (
    <AppWrap className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  max-width: "500px";
  margin: "auto";
`;






export default App;