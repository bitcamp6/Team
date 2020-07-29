import React from "react";
import HomePage from "./HomePage";
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigator from "../common/Navigator";
import {Payment,Map2,Order,Reviews,Mypage,Map} from "./CompanyPage"
import {Signup,Login} from "./Account/";
import Statistics from "./CompanyPage/statistics";

function Page () {
    return (
        <Switch>
            <Route path="/" exact>
            <Navigator/>
            <HomePage/>
            </Route>

            <Route path="/login">
                <Navigator/>
                <Login/>
            </Route>

            <Route path="/signup">
            <Navigator/>
            <Signup/>
            </Route>

             <Route path="/order" >
            <Navigator/>
            <Order/>
            </Route>

             <Route path="/payment">
            <Navigator/>
            <Payment/>
            </Route>

             <Route path="/mypage" >
            <Navigator/>
            <Mypage/>
            </Route>

             <Route path="/reviews" >
            <Navigator/>
            <Reviews/>
            </Route>

             <Route path="/statistics" >
            <Navigator/>
            <Statistics/>
             </Route>

            <Route path="/map2" >
            <Navigator/>
            <Map2/>
            </Route>

            <Route path="/map" >
            <Map/>
            </Route>


        </Switch>
)

}
export default Page