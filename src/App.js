import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Board from "./components/Board";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import GlobalStyle from "./components/style/globalStyle";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/movie/:id" element={<Movie /> }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;