import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import '../assets/css/main.css'

import {Main, Notice, Community, Contacts} from '../pages/index'
import {Navigator, Footer} from "../commons/index";

const Home = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                    <Navigator/>
                    <Main/>
                    <Footer/>
                    </Route>
                    <Route path={"/notice"} component={Notice}/>
                    <Route path={"/community"} component={Community}/>
                    <Route path={"/contacts"} component={Contacts}/>
                </Switch>
        </BrowserRouter>
    );
}

export default Home;
