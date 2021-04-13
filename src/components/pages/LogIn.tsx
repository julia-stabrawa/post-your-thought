import React, {useState} from 'react';
import Validation from "../atoms/Validation";
import HeaderTitle from "../molecules/HeaderTitle";
import Btn from "../atoms/Btn";


function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("none");
    const [errorEmail, setErrorEmail] = useState("none");
    const [success, setSuccess] = useState("none");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (email !== "" && password !== "") {
    //         setSuccess("block");
    //         setErrorPassword("none");
    //         setErrorEmail("none");
    //     } else if (email === "") {
    //         setErrorEmail("block");
    //     } else if (password === "") {
    //         setErrorPassword("block");
    //     }
    // }
    // const passwordCheck = (el) => {
    //     if (el.length > 6) {
    //         setPassword(el);
    //     }
    // }
    // const emailCheck = (el) => {
    //     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if (re.test(el)) {
    //         setEmail(el);
    //     }
    // }


    return (
        <div className="log">
            <HeaderTitle/>
            <div className="log__action-cnt">
                <h2>Log in</h2>
                <Validation
                    display={success}
                    color={"green"}
                    text={"Successfully logged in!"}
                />
                <div className="contact__form">
                    <form className="form">
                        <div className="form__info">
                            <div className="form-row">
                                <label htmlFor="email" className="label__txt">E-mail</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="form-input"
                                    // onChange={(e) => emailCheck(e.target.value)}
                                />
                                <Validation
                                    display={errorEmail}
                                    color={"red"}
                                    text={"Email is incorrect!"}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="password" className="label__txt">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="form-input"
                                    // onChange={(e) => passwordCheck(e.target.value)}
                                />
                                <Validation
                                    display={errorPassword}
                                    color={"red"}
                                    text={"Password is too short!"}
                                />
                            </div>
                        </div>
                        <div className="form-row-btn">
                            <button
                                type="submit"
                                className="btn"
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