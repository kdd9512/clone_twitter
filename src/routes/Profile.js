import React, {useEffect, useState} from "react";
import {authService, dbService} from "../fbase";
import {useHistory} from "react-router-dom";

export default ({userObj, refreshUser}) => {

    const history = useHistory();
    const [newDispName, setNewDispName] = useState(userObj.displayName);

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    const getCloneTw = async () => {
        const tw = await dbService.collection("cloneTw")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt")
            .get();
        // console.log(tw.docs.map((doc) => doc.data()))
    }

    useEffect(() => {
        getCloneTw();
    }, [])

    const onChange = (e) => {
        const {
            target: {value},
        } = e;
        setNewDispName(value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (userObj.displayName !== newDispName) {
            await userObj.updateProfile({
                displayName: newDispName,
            })
            refreshUser();
        }
    };

    return (
        <>
            <span>My Profile</span>
            <br/>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    placeholder="DISPLAY NAME"
                    value={newDispName}
                />
                <input type="submit" value="UPDATE"/>
            </form>
            <button onClick={onLogOutClick}>Sign Out</button>

        </>
    )
};
