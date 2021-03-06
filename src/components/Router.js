import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navi from "./Navi";
import Profile from "../routes/Profile";

const AppRouter = ({refreshUser,isLogin,userObj}) => {
    return (
        <Router>
            {isLogin && <Navi userObj={userObj}/>}
            <Switch>
                {isLogin ? (
                    <div style={{
                        maxWidth: 890,
                        width: "100%",
                        margin: "0 auto",
                        marginTop: 80,
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Route exact path="/">
                            <Home userObj={userObj}/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile userObj={userObj} refreshUser={refreshUser}/>
                        </Route>
                    </div>
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