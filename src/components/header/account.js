import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from "react-bootstrap";
// import './header.scss'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/Auth";
import { When } from "react-if";
import { useNavigate } from "react-router-dom";





export default function Account() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
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
  
