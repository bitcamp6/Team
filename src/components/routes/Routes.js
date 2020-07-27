import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navigator from "../../commons/Navigator";
/*import Login from "../member/Login";
import Main from "../pages/Main";
import Mypage from "../CompanyPage/Mypage";
import Payment from "../CompanyPage/Payment";
import Map from "../CompanyPage/Map";*/

const Routes = () => (
    <Router>
        <Navigator/>
        {/*<Route exact path="/login" component={Login}/>
        <Route exact path="/mypage" component={Mypage}/>
        <Route exact path="/payment" component={Payment}/>
        <Route exact path="/order" component={Payment}/>
        <Route exact path="/map" component={Map}/>
        <Route exact path="/" component={Main}/>*/}
    </Router>
)
export default Routes