import React, {useState} from "react";
import {authService} from "../fbase";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [error, setError] = useState("");
    const [newAccount, setNewAccount] = useState(true);

    const onChange = (e) => {
        const {target: {name, value}} = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "pw") {
            setPw(value);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email,
                    pw
                );
            } else {
                data = await authService.signInWithEmailAndPassword(
                    email,
                    pw
                );
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const toggleAccount = () => setNewAccount(prev => !prev);

    return (
        <>
            <form onSubmit={onSubmit} className="container">
                <input
                    name="email"
                    type="text"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={onChange}
                    className="authInput"
                />
                <input
                    name="pw"
                    type="password"
                    placeholder="Password"
                    required
                    value={pw}
                    onChange={onChange}
                    className="authInput"
                />
                <input
                    type="submit"
                    value={newAccount ? "Create Account" : "Sign In"}
                    className="authInput authSubmit"
                />
                {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount} className="authSwitch">
                {newAccount ? "Sign In" : "Create Account"}</span>
        </>
    );
};
export default AuthForm;