import React from "react";
import {authService} from "../fbase";
import {useHistory} from "react-router-dom";

export default () => {

    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut()
        history.push("/");
    };

    return (
        <>
            <span>My Profile</span>
            <br/>
            <button onClick={onLogOutClick}>Sign Out</button>
        </>
    )
};
