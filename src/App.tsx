import React from 'react';
import './App.css';
import Routes from '../src/components/routes/Routes'
import Main from "./pages/Main";

const App = () => {
    return (
        <div>
            <Routes/>
            <Main/>
        </div>
    )
}

export default App;