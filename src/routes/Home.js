import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {dbService, storageService} from "../fbase";
import CloneTw from "../components/CloneTw";

const Home = ({userObj}) => {
    const [cloneTw, setCloneTw] = useState("");
    const [newTw, setNewTw] = useState([]);
    const [uploadFile, setUploadFile] = useState("");

    // const getNewTw = async () => {
    //     const ntw = await dbService.collection("cloneTw").get();
    //     ntw.forEach((document) => {
    //         const cloneTwObj = {
    //             ...document.data(),
    //             id: document.id,
    //         };
    //         setNewTw(prev => [cloneTwObj, ...prev]);
    //     });
    // }

    useEffect(() => {
        // getNewTw();
        dbService.collection("cloneTw").orderBy("createdAt", "desc")
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
        let uploadedUrl = "";

        if (uploadFile != "") {
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

    const cancelUpload = () => setUploadFile(null);

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
                <input type="file" accept="image/*" onChange={onFileChange}/>
                {/*어떤 종류의 이미지만을 허용하는 input*/}

                <input
                    type="submit"
                    value="cloneTw"
                />

                {uploadFile && (
                    <div>
                        <img src={uploadFile} width="50px" height="50px" alt="uploaded image file"/>
                        <button onClick={cancelUpload}>CANCEL UPLOAD</button>
                    </div>
                )}
                {/*파일이 업로드 되었을 때에만 img 태그가 보임*/}
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
