import React, {useEffect, useState} from "react";
import {dbService} from "../fbase";
import CloneTw from "../components/CloneTw";

const Home = ({userObj}) => {
    const [cloneTw, setCloneTw] = useState("");
    const [newTw, setNewTw] = useState([]);

    const getNewTw = async () => {
        const ntw = await dbService.collection("cloneTw").get();
        ntw.forEach((document) => {
            const cloneTwObj = {
                ...document.data(),
                id: document.id,
            };
            setNewTw(prev => [cloneTwObj, ...prev]);
        });
    }

    useEffect(() => {
        getNewTw();
        dbService.collection("cloneTw").orderBy("createdAt","desc")
            .onSnapshot(snapshot => {
            const cloneTwArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNewTw(cloneTwArray);
        })
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection("cloneTw").add({
            text: cloneTw,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setCloneTw("");
    };
    const onChange = (e) => {
        const {
            target: {value},
        } = e;
        setCloneTw(value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={cloneTw}
                    onChange={onChange}
                    type="text"
                    placeholder="What on your mind?"
                    maxLength={120}
                />
                <input
                    type="submit"
                    value="cloneTw"
                />
            </form>
            <div>
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
