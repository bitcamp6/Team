import React from 'react';
import Home from "./pages/Home";
import NavBar from "./commons/NavBar";
import SideBar from './commons/SideBar'
import Estimate from "./components/Estimate";
import Footer from "./commons/Footer";

function App() {
    return (
        <div>
            <NavBar/>
            <SideBar/>
            <Home/>
            <Estimate/>
            <Footer/>
        </div>
    );
}

export default App;
