import React from "react";
import {dbService} from "../fbase";

const CloneTw = ({cloneTwObj, isOwner}) => {
    const onDeleteClick = async () => {
        const conf = window.confirm("Are you sure you want to delete this message?");
        if (conf) {
            await dbService.doc(`cloneTw/${cloneTwObj.id}`).delete();
        }
    };

    return (
        <div key={cloneTwObj.id}>
            <h4>{cloneTwObj.text}</h4>
            {isOwner && (
                <>
                    <button onClick={onDeleteClick}>DELETE</button>
                    <button>EDIT</button>
                </>
            )}
        </div>
    )
};

export default CloneTw;