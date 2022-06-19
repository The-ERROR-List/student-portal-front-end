import "./login.scss";
import React from "react";
import { Button } from "react-bootstrap";
// import Swal from "sweetalert2";
import { AuthContext } from "../../context/Auth";
import { useContext, useState } from "react";
import { When } from "react-if";
export default function Login() {
    const auth = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const logInHandler = (event) => {
        event.preventDefault();
        auth.signIn(userName, password)
        console.log(auth.user);
        console.log(userName, password);

    }


    const showPassword = () => {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };

    return (
        <div>
            {/* <div class="bg-image"></div> */}
            <When condition={!auth.isLoggedIn}>
                <div class="image"></div>

                <div id="container">
                    <span
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "30px",
                            fontSize: "35px",
                            color: "white"
                        }}
                    >
                        Sign In
                    </span>
                    <hr style={{ color: "white", marginBottom: "15px" }} />
                    <form onSubmit={logInHandler}>
                        <div class="row">
                            <div>
                                <label for="user name"  >User Name</label>
                            </div>
                            {/* <div class="col-12" style={{display:"flex", alignItems:"center"}}> */}
                            <div class="input-container">
                                <i class="fa fa-envelope icon"></i>
                                <input
                                    class="input-field"
                                    type="text"
                                    id="text"
                                    name="text"
                                    placeholder="Enter User Name...."
                                    //   onChange={e => setUsername(e.target.value)}
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}

                                    required
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div>
                                <label for="password"  >Password</label>
                            </div>
                            <div class="input-container">
                                <i class="fa fa-key icon"></i>
                                <input
                                    class="input-field"
                                    type="password"
                                    name="password"
                                    id="myInput"
                                    placeholder="Enter password...."
                                    //   onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                    required
                                />
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <span>
                                <input
                                    style={{
                                        marginTop: "6px",
                                        width: "25px",
                                        height: "20px",
                                        marginRight: "5px",
                                    }}
                                    type="checkbox"
                                    onClick={showPassword}
                                />
                            </span>
                            <span>
                                <label style={{ fontWeight: "lighter" }}>Show Password</label>
                            </span>
                        </div>
                        <hr style={{ color: "white", marginBottom: "10px" }} />
                        <a
                            href="/#"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "15px",
                                //   color: "white"
                            }}
                        >
                            Forgot your password?
                        </a>
                        <br />

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button
                                ariant="outline-primary"
                                type="submit"
                                class="btn-primary"
                                id="btn"
                            // onClick={handelLogIn}
                            >
                                Sign In
                            </Button>
                        </div>
                    </form>
                </div>
            </When>
            <When condition={auth.isLoggedIn}>
                <button onClick={auth.signOut} style={{ marginLeft: 500 }}>Sign Out</button>
            </When>
        </div>
    );
}
