import React, {useEffect, useState} from "react";
import {dbService, storageService} from "../fbase";
import CloneTw from "../components/CloneTw";
import TwFactory from "components/TwFactory";

const Home = ({userObj}) => {
    const [newTw, setNewTw] = useState([]);

    useEffect(() => {
        dbService.collection("cloneTw").orderBy("createdAt", "desc")
            .onSnapshot(snapshot => {
                const cloneTwArray = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setNewTw(cloneTwArray);
            })
    }, []);

    return (
        <div className="container">
            <TwFactory userObj={userObj}/>
            <div style={{ marginTop: 30 }}>
                {newTw.map(cloneTw => (
                    <CloneTw
                        key={cloneTw.id}
                        cloneTwObj={cloneTw}
                        isOwner={cloneTw.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
