import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './header.scss'
import { useState } from 'react';

export default function Course() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <LibraryBooksOutlinedIcon onClick={handleShow} fontSize="large" sx={{ fontSize: 30 }} color="white" /><p>Course</p>

            <Offcanvas show={show} onHide={handleClose} style={{marginLeft:"140px"}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>course</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

