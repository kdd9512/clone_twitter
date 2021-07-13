import React, {useState} from "react";
import {authService} from "../fbase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [newAccount, setnewAccount] = useState(false);

    const onChange = (e) => {
        const {target: {name,value}} = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "pw") {
            setPw(value);
        }
    };

    const onSubmit = async(e) => {
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
            console.log(error);
        }
    };

    return (
        <div>
            <span>Please Log In</span>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="pw"
                    type="password"
                    placeholder="Password"
                    required
                    value={pw}
                    onChange={onChange}
                />
                <input type="submit" value={newAccount ? "Create Account" : "Sign In"}/>
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
};
export default Auth;
