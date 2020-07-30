import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import '../assets/css/main.css'
import VideoUploadPage from "../components/videoUpload/VideoUploadPage";
import {Main, Notice, Events, Community, Contacts} from '../pages/index'
import {Navigator, Footer} from "../commons";

const Home = () => {
    return (
        <>
            <Navigator/>

                <Switch>
                    <Route exact path={"/"}>
                    <Main/>
                    </Route>
                    <Route path={"/notice"} component={Notice}/>
                    <Route path={"/events"} component={Events}/>
                    <Route path={"/community"} component={Community}/>
                    <Route path={"/contacts"} component={Contacts}/>
                    <Route path={"/videoUpload"} component={VideoUploadPage}/>
                </Switch>

   <Footer/>
    </>
    );
}

export default Home;
