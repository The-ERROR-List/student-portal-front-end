import "./login.scss";
import React from "react";
import { AuthContext } from "../../context/Auth";
import { useContext, useState } from "react";
import { When } from "react-if";
import { useNavigate } from "react-router-dom";
export default function Login() {

    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [passwordShown, setPasswordShown] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const logInHandler = (event) => {
        event.preventDefault();
        auth.signIn(userName, password)
        console.log(auth.user);
        console.log(userName, password);
    }
    //show password
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    function redirectHistory() {
        navigate('')
    }
    return (
        <When condition={!auth.isLoggedIn}>
            <div className='body1'>
                <div className='box-form'>
                    <div className='left'>
                        <div className='overlay'>
                            <h1>Elearning Portal </h1>
                            <span><p>This is an online platform that brings together Students and tachers with the ability to manage educaional records </p></span>
                            <br/>
                            <br/>
                        </div>
                    </div >
                    <div className="right">
                        <h5>Login</h5>
                        <div className="inputs">
                        <form onSubmit={logInHandler}>
                                    <input
                                        class="input-field"
                                        type="text"
                                        id="text"
                                        name="text"
                                        placeholder="Enter User Name...."
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                    />
                                    <br/>
                                    <dev style={{position: "relative"}}>
                                    <input
                                        class="input-field"
                                        name="password"
                                        id="myInput"
                                        placeholder="Enter password...."
                                        value={password}
                                        type={passwordShown ? "text" : "password"}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <i onClick={togglePassword} class={passwordShown ? 'far fa-eye-slash' : 'far fa-eye'}></i>
                                    </dev>
                                <button
                                    ariant="outline-primary"
                                    type="submit"
                                    class="btn-primary"
                                    id="btn"
                                    onClick={redirectHistory}
                                >
                                    Sign In
                                </button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </When>
    );
}
