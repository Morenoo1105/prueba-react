import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import SeriesView from "./views/SeriesView";
import MoviesView from "./views/MoviesView";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<SeriesView />} />
        <Route path="/movies" element={<MoviesView />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
