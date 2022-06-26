import { api } from '../../../redux/type'
import axios from 'axios';
import cookie from 'react-cookies'
import { useContext, useEffect, useState } from 'react';
import { Modal, Button, FormGroup } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { When } from 'react-if';
import JoinChat from "../../chat/joinChat"

const ClassTool = () => {
    const state = useContext(StateContext)
    const [meeting, setMeeting] = useState({})
    const [joinUrl, setJoinUrl] = useState("")
    useEffect(() => {
        console.log('11111', meeting.Meeting)
        // seturl(meeting.Meeting['join_url'])
        // console.log('url',meeting.Meeting['join_url'])
    }, [meeting])
    return (
        <div>
            <h1>ClassTool</h1>
            <When condition={cookie.load('role') === 'teacher'}>

                <Button variant="primary" size="lg" onClick={() => {

                    // console.log('clicked me')
                    axios.get(`${api}/createMeeting`, {
                        headers: { Authorization: `Bearer ${cookie.load("token")}` },

                    }).then(response => {
                        setMeeting(response.data)
                        setJoinUrl(response.data.Meeting.join_url)

                        // seturl(response.data.Meeting.join_url)


                    })
                    state.handleShow()
                }}>
                    Create Zoom Meeting
                </Button>
                <Modal
                    show={state.show}
                    onHide={state.handleClose}
                    class="modal-dialog modal-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Zoom Meeting Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {

                            meeting.Meeting ?
                                //  meeting.Meeting.start_url:null
                                <button onClick={() => {
                                    console.log('url', meeting.Meeting.join_url)
                                }}>
                                    <a href={meeting.Meeting.start_url}>
                                        open zoom link
                                    </a>
                                </button>
                                : <p>
                                    no Meetings Are allowd
                                </p>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="danger" onClick={state.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </When>
            <When condition={cookie.load('role') === 'student'}>
                <Button onClick={state.handleShow}>
                    show zoom Meetings
                </Button>
                <Modal
                    show={state.show}
                    onHide={state.handleClose}
                    class="modal-dialog modal-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Zoom Meeting Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {

                            joinUrl ?
                                //  meeting.Meeting.start_url:null
                                <button onClick={() => {
                                    console.log(joinUrl)
                                }}>
                                    <a href={joinUrl}>
                                        open zoom link
                                    </a>
                                </button>
                                : <p>
                                    no Meetings Available
                                </p>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="danger" onClick={state.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </When>

            <JoinChat />
  

        </div>
    )
}
export default ClassTool;