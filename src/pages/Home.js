import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import '../assets/css/main.css'

import {Main, Notice, Contacts, Write} from '../pages/index'
import {Review, Market, Community} from '../pages/community/index'

import {Navigator, Footer} from "../commons/index";

const Home = () => {
    return(
        <>
            <Switch>
                <Route exact path={"/"}>
                    <Navigator/>
                    <Main/>
                    <Footer/>
                </Route>
                <Route path={"/notice"} component={Notice}/>
                <Route path={"/community"} component={Community}/>
                <Route path={"/review"} component={Review}/>
                <Route path={"/market"} component={Market}/>
                <Route path={"/contacts"} component={Contacts}/>
                <Route path={"/write"} component={Write}/>
            </Switch>
        </>
    )
}

export default Home;
