import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cookies from 'universal-cookie';
import Menu from "./components/Menu";
import Home from "./components/Home";
import Outlet from "./components/Outlet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useContext } from "react";

function App() {

  

  const head = React.createContext({title: 'YOU & ME', subtitle: 'DIGITAL MENU'});
  const header = useContext(head);

  const cookies = new Cookies();
  const lang = cookies.get('lang')? cookies.get('lang') : 0;
  
  console.log(lang);

  
  return (
    <BrowserRouter>
      
      <Header title = { header.title } subtitle = { header.subtitle }/>
      
      <Footer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/outlet/:id" element={<Outlet/> } />
          <Route exact path="/menu/:id" element={<Menu/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;