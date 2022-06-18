import {AuthContext} from "../../context/Auth";
import { useContext,useState } from "react";

export default function Signup(props) {

    const auth = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const adminSignHandler = (event) => {
        event.preventDefault();
        auth.signUp(userName,email,password,"admin")

    }
    return (
        <form onSubmit={adminSignHandler}>
            <input type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Admin Sign Up</button>
        </form>
    )

}