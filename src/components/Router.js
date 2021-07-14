import React, {useState} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navi from "./Navi";
import Profile from "../routes/Profile";

const AppRouter = ({isLogin}) => {
    return (
        <Router>
            {isLogin && <Navi/>}
            <Switch>
                {isLogin ? (
                    <>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile/>
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