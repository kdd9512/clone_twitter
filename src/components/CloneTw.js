import React, {useState} from "react";
import {dbService} from "../fbase";

const CloneTw = ({cloneTwObj, isOwner}) => {
    const [edit, setEdit] = useState(false); // 수정모드인가 아닌가를 따지기 위함.
    const [newEdit, setNewEdit] = useState(cloneTwObj.text); // DB상의 값 cloneTwObj.text를 변경하기 위함.

    const onDeleteClick = async () => {
        const conf = window.confirm("Are you sure you want to delete this message?");
        if (conf) {
            await dbService.doc(`cloneTw/${cloneTwObj.id}`).delete();
        }
    };

    const toggleEditing = () => setEdit((prev) => !prev);

    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.doc(`cloneTw/${cloneTwObj.id}`).update({
            text:newEdit,
        });
        setEdit(false);
    };

    const onChange = (e) => {
        const {
            target:{value},
        } = e;
        setNewEdit(value);
    };

    return (
        <div>
            {edit ? (
                <>
                    {isOwner && (
                        <>
                            <form onSubmit={onSubmit}>
                                <input
                                    onChange={onChange}
                                    type="text"
                                    placeholder="Edit this Message"
                                    value={newEdit}
                                    required/>
                                <input type="submit" value="Update cloneTw" />
                            </form>
                            <button onClick={toggleEditing}>CANCEL</button>
                        </>
                    )}
                </>
            ) : (
                <>
                    <h4>{cloneTwObj.text}</h4>
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>DELETE</button>
                            <button onClick={toggleEditing}>EDIT</button>
                        </>
                    )}
                </>
            )}
        </div>
    )
};

export default CloneTw;