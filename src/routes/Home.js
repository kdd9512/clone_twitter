import React, {useState} from "react";
import {dbService} from "../fbase";

const Home = () => {
    const [cloneTw, setCloneTw] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection("cloneTw").add({
            cloneTw: cloneTw,
            createdAt: Date.now(),
        });
        setCloneTw("");
    };
    const onChange = (e) => {
        const {
            target:{value},
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
        </div>
    );
};

export default Home;
