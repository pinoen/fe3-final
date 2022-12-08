
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Components/utils/MainLayout";
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Home from './Routes/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destacados" element={<Favs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
