import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import './header.scss'
import { Link } from 'react-router-dom'
import Account from './account'
import Course from './course'
import cookie from "react-cookies";
import { When } from 'react-if';


const Header = () => {

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
                        <div className='btn'>
                            <Account />
                        </div>

                        <When condition={cookie.load('role') !== "admin"}>
                            <div className='btn1'>
                                <Course />
                            </div>
                        </When>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;