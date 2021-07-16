import React, {useEffect, useState} from "react";
import {dbService} from "../fbase";

const Home = () => {
    const [cloneTw, setCloneTw] = useState("");
    const [newTw, setNewTw] = useState([]);

    const getNewTw  = async () => {
        const ntw = await dbService.collection("cloneTw").get();
        ntw.forEach((document) => {
            setNewTw(prev => [document.data(), ...prev]);
        });
    }

    useEffect(() => {
        getNewTw();
    },[]
    );

    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection("cloneTw").add({
            cloneTw: cloneTw,
            createdAt: Date.now()
        });
        setCloneTw("");
    };
    const onChange = (e) => {
        const {
            target:{value},
        } = e;
        setCloneTw(value);
    };

    console.log(newTw)
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
        </div>
    );
};

export default Home;
