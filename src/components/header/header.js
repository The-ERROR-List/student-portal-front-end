import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './header.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Account from './account'
import Course from './course'
import cookie from "react-cookies";
import { When } from 'react-if';

function OffCanvasExample({ name, icon, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>

            <span onClick={toggleShow} style={{ textAlign: 'center', marginTop: '15px', color: 'white' }} className="" >{icon}<br />{name}</span>
            <Offcanvas show={show} onHide={handleClose} {...props} style={{ marginLeft: "140px" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
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
            backdrop: true,

        },
        {
            name: 'Courses',
            icon: <LibraryBooksOutlinedIcon fontSize="large" sx={{ fontSize: 30 }} color="white" />,
            scroll: true,
            backdrop: true,
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
                        {/* {options.map((props, idx) => ( */}
                        {/* key={idx} */}
                        <div className='btn'>
                            <Account />

                            {/* <OffCanvasExample key={idx} {...props} /> */}
                        </div>
                        <div className='btn'>
                            <When condition={cookie.load('role') !=="admin"}>
                                <Course />
                            </When>
                        </div>

                        {/* ))} */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;