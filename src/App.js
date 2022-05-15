import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Outlet from "./components/Outlet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [headerText, setHeaderText] = useState([]);

  const changeHeader = ({title, subtitle}) => {
      setHeaderText({title: title, subtitle: subtitle});
  }

  if (headerText.length === 0){
    changeHeader({title:'YOU & ME', subtitle:'DIGITAL MENU'});
  }

  
  return (
    <BrowserRouter>
      
      <Header title = { headerText.title } subtitle = { headerText.subtitle }/>
      <Footer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/outlet/:id" element={<Outlet changeHeader={changeHeader} />} />
        <Route exact path="/menu/:id" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;