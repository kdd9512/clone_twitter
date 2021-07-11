import React, {useState} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <Router>
            <Switch>
                {isLogin ? (
                    <>
                        <Route exact path="/">
                            <Home/>
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