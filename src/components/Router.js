import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navi from "./Navi";
import Profile from "../routes/Profile";

const AppRouter = ({isLogin,userObj}) => {
    return (
        <Router>
            {isLogin && <Navi/>}
            <Switch>
                {isLogin ? (
                    <>
                        <Route exact path="/">
                            <Home userObj={userObj}/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile userObj={userObj}/>
                        </Route>
                    </>
                ) : (
                    <Route exact path="/">
                        <Auth/>
                    </Route>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter