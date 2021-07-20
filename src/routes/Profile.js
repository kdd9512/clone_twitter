import React, {useEffect} from "react";
import {authService, dbService} from "../fbase";
import {useHistory} from "react-router-dom";

export default ({userObj}) => {

    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut()
        history.push("/");
    };

    const getCloneTw = async() => {
        const tw = await dbService.collection("cloneTw")
            .where("creatorId","==",userObj.uid)
            .orderBy("createdAt")
            .get();
        console.log(tw.docs.map((doc) => doc.data()))
    }

    useEffect(() => {
        getCloneTw();
    },[])

    return (
        <>
            <span>My Profile</span>
            <br/>
            <button onClick={onLogOutClick}>Sign Out</button>
        </>
    )
};
