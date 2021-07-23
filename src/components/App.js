import React, {useEffect, useState} from 'react';
import AppRouter from "components/Router";
import {authService} from "../fbase";

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged(
            (user) => {
                if (user) {
                    if (user.displayName === null) {
                        user.updateProfile({
                            displayName: 'NONAME',
                        });
                    }
                    setUserObj({
                        displayName:user.displayName,
                        uid:user.uid,
                        updateProfile: (args) => user.updateProfile(args),
                    });
                } else {
                    setUserObj(null);
                }
                setInit(true);
            });
    }, [])

    const refreshUser = () => {
        const user = authService.currentUser;
        // authService.currentUser 오브젝트의 내용이 매우 방대하기 때문에 렌더링하는데 문제가 발생한다.
        // setUserObj 이하와 같이 필요한 object 만을 추려서 가져오도록 해줄 수 있다.

        setUserObj({
            displayName:user.displayName,
            uid:user.uid,
            updateProfile: (args) => user.updateProfile(args),
        });

    }

    return (
        <>
            {init ? (
                <AppRouter
                    refreshUser={refreshUser}
                    isLogin={Boolean(userObj)}
                    userObj={userObj}
                />
            ) : (
                "Initializing"
            )}
        </>
    );
}

export default App;
