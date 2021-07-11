import React, {useState} from 'react';
import AppRouter from "components/Router";
import { authService } from "../fbase";

function App() {
    const [isLogin, setIsLogin] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLogin={isLogin}/>
        <footer>&copy; {new Date().getFullYear()} clone_twitter </footer>
    </>
  );
}

export default App;
