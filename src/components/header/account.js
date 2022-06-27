import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Offcanvas, Button, Card } from 'react-bootstrap/';
import { When } from 'react-if'
import { AuthContext } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import './header.scss'
import { useState, useContext, useEffect } from 'react'
import { getAllTeacherInfo } from '../../redux/teacherById';
import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import cookie from "react-cookies";
// import cookie from 'react-cookies'
import { getStudentInfo} from '../../redux/studentById';



export default function Account() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.infoById.accountInfo)
    const selector2 = useSelector((state) => state.infoStuById.accountInfo2)

    const auth = useContext(AuthContext);
    const [show, setShow] = useState(false);
    // console.log({ selector })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function redirectHistory() {
        navigate('')
    }
    function handelSignOut() {
        auth.signOut()
        redirectHistory()
    }
    useEffect(() => {
        if (cookie.load('role') === 'teacher') {
            dispatch(getAllTeacherInfo(cookie.load('id')))
            console.log({selector})
        }
        if (cookie.load('role') === 'student') {
            dispatch(getStudentInfo(cookie.load('id')))
            console.log({selector2})
        }
    }, [show])
    return (
        <>
            <AccountCircleOutlinedIcon onClick={handleShow} fontSize="large" sx={{ fontSize: 30 }} color="white" /><p>Account</p>

            <Offcanvas show={show} onHide={handleClose} style={{ marginLeft: "140px" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <When condition={cookie.load('role') === 'teacher'}>
                            {cookie.load('role') === 'teacher' ?
                           <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><Avatar
                                        color={Avatar.getRandomColor("sitebase", [
                                            "red",
                                            "green",
                                            "aqua",
                                        ])}
                                        size={50}
                                        round="50%"
                                        name={selector.firstName}
                                    /></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">@{selector.userName}</Card.Subtitle>
                                    <Card.Text>
                                        <h1 style={{ fontSize: "18px" }}>Full name : {selector.firstName} {selector.lastName}</h1>
                                        <h1 style={{ fontSize: "18px" }}>Gender : {selector.gender}</h1>
                                        <h1 style={{ fontSize: "18px" }}>Nationality : {selector.nationality}</h1>
                                        <h1 style={{ fontSize: "18px" }}>Department : {selector.department}</h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>  :null
                        }
                        </When>
                        <When condition={cookie.load('role') === 'student'}>
                        {cookie.load('role') === 'student' ?
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><Avatar
                                        color={Avatar.getRandomColor("sitebase", [
                                            "red",
                                            "green",
                                            "aqua",
                                        ])}
                                        size={50}
                                        round="50%"
                                        name={selector2.firstName}
                                    /></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">@{selector2.userName}</Card.Subtitle>
                                    <Card.Text>
                                        <h1 style={{ fontSize: "18px" }}>Full name : {selector2.firstName} {selector2.lastName}</h1>
                                        <h1 style={{ fontSize: "18px" }}>Gender : {selector2.gender}</h1>
                                        <h1 style={{ fontSize: "18px" }}>Nationality : {selector2.nationality}</h1>
                                        <h1 style={{ fontSize: "18px" }}>Major : {selector2.major}</h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>:null
}
                        </When>
                                    
                    </div>
                    <div>
                        <When condition={auth.isLoggedIn}>
                            <Button onClick={handelSignOut} >Sign Out</Button>
                        </When>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

