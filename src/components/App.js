import React, {useEffect, useState} from 'react';
import AppRouter from "components/Router";
import { authService } from "../fbase";

function App() {
    const [init, setInit] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        authService.onAuthStateChanged(
            (user)=> {
                if (user){
                    setIsLogin(true);
                } else {
                    setIsLogin(false);
                }
                setInit(true);
            });
    },[])
  return (
    <>
        {init? <AppRouter isLogin={isLogin}/> : "Initializing"}
        <footer>&copy; {new Date().getFullYear()} clone_twitter </footer>
    </>
  );
}

export default App;
