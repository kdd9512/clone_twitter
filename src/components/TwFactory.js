import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {dbService, storageService} from "../fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const TwFactory = ({userObj}) => {
    const [cloneTw, setCloneTw] = useState("");
    const [uploadFile, setUploadFile] = useState("");

    const onSubmit = async (e) => {
        if (cloneTw === "") {
            return;
        }
        e.preventDefault();

        let uploadedUrl = "";
        if (uploadFile !== "") {
            const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const resp = await fileRef.putString(uploadFile, "data_url");
            uploadedUrl = await resp.ref.getDownloadURL();
        }

        const tweet = {
            text: cloneTw,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            uploadedUrl,
        };

        await dbService.collection("cloneTw").add(tweet);
        setCloneTw("");
        setUploadFile("");
    };

    const onChange = (e) => {
        const {
            target: {value},
        } = e;
        setCloneTw(value);
    };

    const onFileChange = (e) => {
        const {
            target: {files},
        } = e;

        const previewFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finEv) => {
            const {
                currentTarget: {result},
            } = finEv;
            setUploadFile(result);
        }
        reader.readAsDataURL(previewFile);
    };

    const cancelUpload = () => setUploadFile("");

    return (
        <form onSubmit={onSubmit} className="factoryForm">
            <div className="factoryInput__container">
                <input
                    className="factoryInput__input"
                    value={cloneTw}
                    onChange={onChange}
                    type="text"
                    placeholder="What on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="&rarr;" className="factoryInput__arrow" />
            </div>

            <label htmlFor="attach-file" className="factoryInput__label">
                <span>Add photos</span>
                <FontAwesomeIcon icon={faPlus}/>
            </label>

            <input
                id="attach-file"
                type="file"
                accept="image/*"
                onChange={onFileChange}
                style={{
                    opacity: 0,
                }}
            />
            {/*어떤 종류의 이미지만을 허용하는 input*/}

            <input
                type="submit"
                value="cloneTw"
            />

            {uploadFile && (
                <div>
                    <img
                        src={uploadFile}
                        alt="uploaded image file"
                        style={{
                            backgroundImage: uploadFile,
                        }}
                    />
                    <div className="factoryForm__clear" onClick={cancelUpload}>
                        <span>Remove</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            )}
            {/*파일이 업로드 되었을 때에만 img 태그가 보임*/}
        </form>
    )
};
export default TwFactory;