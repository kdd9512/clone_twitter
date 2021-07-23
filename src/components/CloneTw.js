import React, {useState} from "react";
import {dbService, storageService} from "../fbase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPencilAlt} from "@fortawesome/free-solid-svg-icons";

const CloneTw = ({cloneTwObj, isOwner}) => {
    const [edit, setEdit] = useState(false); // 수정모드인가 아닌가를 따지기 위함.
    const [newEdit, setNewEdit] = useState(cloneTwObj.text); // DB상의 값 cloneTwObj.text를 변경하기 위함.

    const onDeleteClick = async () => {
        const conf = window.confirm("Are you sure you want to delete this message?");
        if (conf) {
            await dbService.doc(`cloneTw/${cloneTwObj.id}`).delete();
            await storageService.refFromURL(cloneTwObj.uploadedUrl).delete();
        }
    };

    const toggleEditing = () => setEdit((prev) => !prev);

    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.doc(`cloneTw/${cloneTwObj.id}`).update({
            text: newEdit,
        });
        setEdit(false);
    };

    const onChange = (e) => {
        const {
            target: {value},
        } = e;
        setNewEdit(value);
    };

    return (
        <div className="cloneTw">
            {edit ? (
                <>
                    {isOwner && (
                        <>
                            <form onSubmit={onSubmit} className="container cloneTwEdit">
                                <input
                                    onChange={onChange}
                                    type="text"
                                    placeholder="Edit this Message"
                                    value={newEdit}
                                    required/>
                                <input type="submit" value="Update cloneTw" className="formBtn"/>
                            </form>
                            <button onClick={toggleEditing} className="formBtn cancelBtn">
                                CANCEL
                            </button>
                        </>
                    )}
                </>
            ) : (
                <>
                    <h4>{cloneTwObj.text}</h4>
                    {cloneTwObj.uploadedUrl && <img src={cloneTwObj.uploadedUrl}/>}
                    {isOwner && (
                        <div className="cloneTw__actions">
                        <span onClick={onDeleteClick}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </span>
                            <span onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt}/>
                            </span>
                        </div>
                    )}
                </>
            )}
        </div>
    )
};

export default CloneTw;