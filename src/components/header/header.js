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
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const Header = () => {

    return (
        <div className='nav'>
            <Navbar bg="dark" variant="dark"  >
                <Container >
                    <Nav className="me-auto cont" >
                        <Navbar.Brand href="/"><SchoolOutlinedIcon sx={{ fontSize: 70, textDecoration: "none", color: "inherit", textAlign: 'center', marginLeft: "20px", marginTop: "-30px" }} /></Navbar.Brand>
                        <hr style={{ color: "white" }} />
                        <div className='btn'>
                            <Nav.Link href="/" style={{ textAlign: 'center', marginTop: '7px', textDecoration: "none", color: "inherit" }}
                            >
                                <Link style={{ textDecoration: "none", color: "inherit" }} to='/'>
                                    <SpeedOutlinedIcon sx={{ fontSize: 30 }} /> <p>Dashboard</p> </Link></Nav.Link>
                        </div>
                        <When condition={cookie.load('role') === 'admin'}>
                            <div className='btn'>
                                <Nav.Link href="/admin-teacher" style={{ textAlign: 'center', marginTop: '7px', textDecoration: "none", color: "inherit" }}
                                >
                                    <Link style={{ textDecoration: "none", color: "inherit" }} to='/admin-teacher'>
                                        <PersonIcon sx={{ fontSize: 30 }} /> <p>Teachers</p> </Link></Nav.Link>
                            </div>

                            <div className='btn'>
                                <Nav.Link href="/admin-student" style={{ textAlign: 'center', marginTop: '7px', textDecoration: "none", color: "inherit" }}
                                >
                                    <Link style={{ textDecoration: "none", color: "inherit" }} to='/admin-student'>
                                        <SchoolOutlinedIcon sx={{ fontSize: 30 }} /> <p>Students</p> </Link></Nav.Link>
                            </div>
                            <div className='btn'>
                                <Nav.Link href="/admin-course" style={{  textDecoration: "none",textAlign: 'center', marginTop: '7px', textDecoration: "none", color: "inherit" }}
                                >
                                    <Link style={{ textDecoration: "none", color: "inherit" }} to='/admin-course'>
                                        <LibraryBooksOutlinedIcon sx={{ fontSize: 30 }} /> <p>Courses</p> </Link></Nav.Link>
                            </div>
                            <div className='btn'>
                                <Nav.Link href="/admin-class" style={{ textAlign: 'center', marginTop: '7px', textDecoration: "none", color: "inherit" }}
                                >
                                    <Link style={{ textDecoration: "none", color: "inherit" }} to='/admin-class'>
                                        <GroupIcon sx={{ fontSize: 30 }} /> <p>Classes</p> </Link></Nav.Link>
                            </div>
                        </When>
                        <When condition={cookie.load('role') !== "admin"}>
                            <div className='btn'>
                                <Course />
                            </div>
                        </When>
                        <div className='btn'>
                            <Account />
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;