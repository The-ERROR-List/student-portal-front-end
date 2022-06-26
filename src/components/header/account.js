import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Offcanvas, Button } from 'react-bootstrap/';
import { When } from 'react-if'
import { AuthContext } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import './header.scss'
import { useState, useContext } from 'react';
export default function Account() {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function redirectHistory() {
        navigate('')
    }
    function handelSignOut() {
        auth.signOut()
        redirectHistory()
    }
    return (
        <>
            <AccountCircleOutlinedIcon onClick={handleShow} fontSize="large" sx={{ fontSize: 30 }} color="white" /><p>Account</p>

            <Offcanvas show={show} onHide={handleClose} style={{marginLeft:"140px"}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <When condition={auth.isLoggedIn}>
                        <Button onClick={handelSignOut} >Sign Out</Button>
                    </When>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

