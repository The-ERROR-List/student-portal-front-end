import { api } from '../../../redux/type'
import axios from 'axios';
import cookie from 'react-cookies'
import { useContext, useEffect, useState } from 'react';
import { Modal, Button, FormGroup } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { When } from 'react-if';
import JoinChat from "../../chat/joinChat"
import { zoomContext } from '../../../context/zoom'
const ClassTool = (props) => {
    const state = useContext(StateContext)
    const zoom = useContext(zoomContext)
    useEffect(() => {
        console.log('11111', zoom.meeting.Meeting)
        console.log(zoom.joinUrl)

    }, [zoom.meeting])
    return (
        <div>
            <h1>ClassTool</h1>
            <When condition={cookie.load('role') === 'teacher'}>

                <Button variant="primary" size="lg" onClick={() => {
                    zoom.CreateMeeting()
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
                            zoom.meeting.Meeting ?
                                <button onClick={() => {
                                    console.log('url', zoom.meeting.Meeting.join_url)
                                }}>
                                    <a href={zoom.meeting.Meeting.start_url}>
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

                            // zoom.joinUrl ?
                                //  meeting.Meeting.start_url:null
                                <button onClick={() => {
                                    console.log(zoom.joinUrl)
                                }}>
                                    <a href={zoom.joinUrl}>
                                        open zoom link
                                    </a>
                                </button>
                                // : <p>
                                //     no Meetings Available
                                // </p>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="danger" onClick={state.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </When>

            <JoinChat id={props.id} />


        </div>
    )
}
export default ClassTool;