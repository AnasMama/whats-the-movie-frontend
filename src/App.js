import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/Board";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route exact="/board/:id/movie/*" element={<Movie /> }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;