import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from "react-bootstrap";
import './header.scss'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/Auth";
import { When } from "react-if";
import { useNavigate } from "react-router-dom";
import Account from './account'


function OffCanvasExample({ name, icon, ...props }) {
    const [show, setShow] = useState(false);
    const auth = useContext(AuthContext);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const navigate=useNavigate()
    function redirectHistory() {
        navigate('')
    }
    
    function handelSignOut() {
        auth.signOut()
        redirectHistory()
    }
    return (
        <>

            <span onClick={toggleShow} style={{ textAlign: 'center', marginTop: '15px', color: 'white' }} className="" >{icon}<br />{name}</span>
            <Offcanvas show={show} onHide={handleClose} {...props} style={{ marginLeft: "140px" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc. */}
                    <When condition={auth.isLoggedIn}>
                        <Button onClick={handelSignOut} >Sign Out</Button>
                    </When>
                </Offcanvas.Body>
               
            </Offcanvas>
        </>
    );
}
const Header = () => {
    const options = [

        {
            name: 'Account',
            icon: <AccountCircleOutlinedIcon fontSize="large" sx={{ fontSize: 30 }} color="white" />,
            scroll: true,
            backdrop: true
        },
        {
            name: 'Courses',
            icon: <LibraryBooksOutlinedIcon fontSize="large" sx={{ fontSize: 30 }} color="white" />,
            scroll: true,
            backdrop: true
        },
    ]


    return (
        <div className='nav'>
            <Navbar bg="dark" variant="dark"  >
                <Container >
                    <Nav className="me-auto cont" >
                        <Navbar.Brand href="/"><SchoolOutlinedIcon sx={{ fontSize: 70, color: "white", textAlign: 'center', marginLeft: "20px", marginTop: "-30px" }} /></Navbar.Brand>
                        <hr style={{ color: "white" }} />
                        <div className='btn'>

                            <Nav.Link href="/" style={{ textAlign: 'center', marginTop: '15px', color: 'white' }}
                            >
                                <Link to='/'>
                                    <SpeedOutlinedIcon sx={{ fontSize: 30 }} /> <p>Dashboard</p> </Link></Nav.Link>
                        </div>
                        {/* {options.map((props, idx) => (
                            <div key={idx} className='btn'>
                                <OffCanvasExample key={idx} {...props} />
                            </div>
                        ))} */}
                        <Account/>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;