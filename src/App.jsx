
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Home from './Routes/Home'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destacados" element={<Favs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
