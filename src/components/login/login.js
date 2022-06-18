
import {AuthContext} from "../../context/Auth"; 
 
 import { useContext,useState } from "react";
 export default function Login(props) {
    const auth = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const logInHandler = (event) => {
        event.preventDefault();
        auth.signIn(userName, password)
    }
return (
    <form onSubmit={logInHandler}>
         <input type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>
    </form>
)

}