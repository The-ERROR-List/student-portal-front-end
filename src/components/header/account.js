import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Offcanvas, Button, Card } from 'react-bootstrap/';
import { When } from 'react-if'
import { AuthContext } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import './account.scss'
import { useState, useContext, useEffect } from 'react'
import { getAllTeacherInfo } from '../../redux/teacherById';
import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import cookie from "react-cookies";
// import cookie from 'react-cookies'
import { getStudentInfo } from '../../redux/studentById';



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
            console.log({ selector })
        }
        if (cookie.load('role') === 'student') {
            dispatch(getStudentInfo(cookie.load('id')))
            console.log({ selector2 })
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
                    <div className=''>
                        <When condition={cookie.load('role') === 'teacher'}>
                            {cookie.load('role') === 'teacher' ?
                                <div>
                                    <div className="account-card-header">
                                        <Avatar
                                            color={Avatar.getRandomColor("sitebase", [
                                                "red",
                                                "green",
                                                "aqua",
                                            ])}
                                            size={100}
                                            round="50%"
                                            name={selector.firstName}
                                        />
                                        <h1 className="mb-2 text-muted" style={{ fontSize: '25px' }}>@{selector.userName}</h1>
                                    </div>
                                    <div>
                                        <h1 style={{ fontSize: "20px", fontWeight: "bold", textAlign: 'center' }}>Full name : {selector.firstName} {selector.lastName}</h1>
                                        {/* <h1 style={{ fontSize: "18px" }}>Gender : {selector.gender}</h1>
                                        <h1 style={{ fontSize: "18px" }}>Nationality : {selector.nationality}</h1>
                                        <h1 style={{ fontSize: "18px" }}>Department : {selector.department}</h1> */}
                                    </div>
                                </div> : null
                        }
                        </When>
                        <When condition={cookie.load('role') === 'student'}>
                            {cookie.load('role') === 'student' ?
                                <div>
                                    <div className="account-card-header">
                                        <Avatar
                                            color={Avatar.getRandomColor("sitebase", [
                                                "red",
                                                "green",
                                                "aqua",
                                            ])}
                                            size={100}
                                            round="50%"
                                            name={selector2.firstName}
                                        />
                                        <h1 className="mb-2 text-muted" style={{ fontSize: '25px' }}>@{selector2.userName}</h1>
                                    </div>
                                    <div>
                                        <h1 style={{ fontSize: "20px", fontWeight: "bold", textAlign: 'center' }}>Full name : {selector2.firstName} {selector2.lastName}</h1>
                                        {/* <h1 style={{ fontSize: "18px" }}>Gender : {selector2.gender}</h1>
                                        <h1 style={{ fontSize: "18px" }}>Nationality : {selector2.nationality}</h1>
                                        <h1 style={{ fontSize: "18px" }}>Major : {selector2.major}</h1> */}
                                    </div>
                                </div> 
                                : null
                            }
                        </When>

                    </div>
                    <div className='account-logout'>
                        <When condition={auth.isLoggedIn}>
                            <Button onClick={handelSignOut} >Sign Out</Button>
                        </When>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

