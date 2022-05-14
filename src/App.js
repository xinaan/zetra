import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Outlet from "./components/Outlet";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <Footer />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/outlet/:id" element={<Outlet/>} />
        <Route exact path="/menu/:id" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
