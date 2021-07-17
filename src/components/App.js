import React, {useEffect, useState} from 'react';
import AppRouter from "components/Router";
import { authService } from "../fbase";

function App() {
    const [init, setInit] = useState(false);
    const [userObj,setUserObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged(
            (user)=> {
                if (user){
                    setUserObj(user);
                }
                setInit(true);
            });
    },[])
  return (
    <>
        {init? <AppRouter isLogin={Boolean(userObj)} userObj={userObj}/> : "Initializing"}
        <footer>&copy; {new Date().getFullYear()} clone_twitter </footer>
    </>
  );
}

export default App;
