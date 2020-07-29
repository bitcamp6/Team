import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Main from "../pages/Main";
import Events from "../pages/Events";
import Community from "../pages/Community";
import Contacts from "../pages/Contacts";
import Navigator from "../commons/Navigator";

const Home = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                    <Navigator/>
                    <Main/>
                    </Route>
                    <Route path={"/events"} component={Events}/>
                    <Route path={"/community"} component={Community}/>
                    <Route path={"/contacts"} component={Contacts}/>
                </Switch>
        </BrowserRouter>
    );
}

export default Home;
