import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import '../assets/css/main.css'

import {Main, Notice, Events, Community, Contacts} from '../pages/index'
import {Navigator, Footer} from "../commons/index";
import Map2 from "./CompanyPage/Map2";

const Home = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                    <Navigator/>
                    <Main/>
                    <Footer/>
                    </Route>

                    <Route path="/map2" >
                        <Navigator/>
                        <Map2/>
                    </Route>

                    <Route path={"/notice"} component={Notice}/>
                    <Route path={"/events"} component={Events}/>
                    <Route path={"/community"} component={Community}/>
                    <Route path={"/contacts"} component={Contacts}/>
                </Switch>
        </BrowserRouter>
    );
}

export default Home;
