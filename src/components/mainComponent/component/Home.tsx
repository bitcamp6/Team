import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import SidebarNavbar from "./SidebarNavbar";
import Esti from "../../move/component/Esti";
import VideoUploadPage from "../../videoUpload/VideoUploadPage";
import MovingType from "../../move/component/MovingType";
import MovingDate from "../../move/component/MovingDate";
import Main from "./Main";
import MovingStartPoint from "../../move/component/movingPoint/MovingStartPoint";
const Home: React.FC = () => {
    return (
        <>
                <SidebarNavbar/>
                <BrowserRouter>
               <Switch>
                <Route exact path={"/"} component={Main}/>
                    <Route path="/estimate">
                        <Esti/>
                    </Route>
                    <Route path={"/videoUpload"} component={VideoUploadPage}/>
                    <Route path={"/movingType"} component={MovingType}/>
                    <Route path={"/movingDate"} component={MovingDate}/>
                    <Route path={"/startPoint"} component={MovingStartPoint}/>
               </Switch>
               </BrowserRouter>
        </>
    );
};

export default Home;