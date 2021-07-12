import React, {useState} from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const onChange = (e) => {
        const {target: {name,value}} = e;
        console.log(value)
        if (name === "email") {
            setEmail(value);
        } else if (name === "pw") {
            setPw(value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
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
                <input type="submit" value="Log In"/>
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
};
export default Auth;
