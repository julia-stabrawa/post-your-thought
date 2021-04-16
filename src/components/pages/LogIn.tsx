import React, {useState} from 'react';
import Validation from "../atoms/Validation";
import HeaderTitle from "../molecules/HeaderTitle";

export type Props = {
    logFunc: (result: boolean) => void;
    usernameChange: (username: string) => void;
    passwordChange: (password: string) => void;
    submitChange: (username: string, password: string) => void;
}

const LogIn: React.FC<Props> = ({logFunc, usernameChange, passwordChange, submitChange}) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("none");
    const [errorName, setErrorName] = useState<string>("none");

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (username === "") {
            setErrorName("block");
        } else if (password === "") {
            setErrorPassword("block");
        } else {
            sessionStorage.setItem("user", `{name: ${username}, password: ${password}`);
            logFunc(true);
            submitChange(username, password);
        }
    }

    const passwordCheck = (pass: any) => {
        const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
        if (re.test(pass)) {
            setPassword(pass);
            passwordChange(pass);
            setErrorPassword("none");
        }else{
            setErrorPassword("block");
        }
    }

    const nameCheck = (username: any) => {
        const re = /^[a-zA-Z]{5,}$/;
        if (re.test(username)) {
            setUsername(username);
            usernameChange(username)
            setErrorName("none");
        }else{
            setErrorName("block");
        }
    }

    return (
        <div className="log">
            <HeaderTitle/>
            <div className="log__action-cnt">
                <h2>Log in</h2>
                <div className="contact__form">
                    <form className="form">
                        <div className="form__info" data-testid="login-form">
                            <div className="form-row">
                                <label htmlFor="name" className="label__txt">Username</label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    className="form-input"
                                    data-testid="username"
                                    onChange={(e) => nameCheck(e.target.value)}
                                />
                                <Validation
                                    display={errorName}
                                    color={"red"}
                                    text={"Username is too short!"}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="password" className="label__txt">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="form-input"
                                    data-testid="password"
                                    onChange={(e) => passwordCheck(e.target.value)}
                                />
                                <Validation
                                    display={errorPassword}
                                    color={"red"}
                                    text={"Password has to contain " +
                                    "8 characters, " +
                                    "at least one small letter, " +
                                    "at least one capital letter, " +
                                    "at least one number"}
                                />
                            </div>
                        </div>
                        <div className="form-row-btn">
                            <button
                                type="submit"
                                className="btn"
                                data-testid="submit"
                                onClick={(event: React.MouseEvent<HTMLElement>) => handleSubmit(event)}
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;