import React from "react";
import styled from "styled-components";
import Start from "./Start";
import {Route, Routes} from "react-router-dom";
import Question from "./Question";
import Score from "./Score";

function App() {
  
  const [name, setName] = React.useState("송원석");

  return (
    <AppWrap className="App">
      <Routes>
        <Route path="/" element={<Start name={name}/>} />
        <Route path="/question" element={<Question />} />
        <Route path="/score" element={<Score/>} />
      </Routes>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  max-width: "500px";
  margin: "auto";
`;






export default App;