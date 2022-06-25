import{api} from '../../../redux/type'
import axios from 'axios';
import cookie from 'react-cookies'
import { useContext, useEffect, useState } from 'react';
import { Modal, Button, FormGroup } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import {
  Form,
  Row,
  Col,
  Label,
  Input,

} from "reactstrap";
const ClassTool = () => {
    const state =useContext(StateContext)
    const[meeting,setMeeting]=useState({})
    useEffect(()=>{
        console.log('11111',meeting)
    },[meeting])
    return (
        <div>
            <h1>ClassTool</h1>

            <Button variant="primary" size="lg" onClick={()=>{

                console.log('clicked me')
            axios.get(`${api}/createMeeting`,{
                headers: { Authorization: `Bearer ${cookie.load("token")}` },

            }).then(response=>{
                setMeeting(response.data)
                
                
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
                         meeting.Meeting?
                        //  meeting.Meeting.start_url:null
                        <button>
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


        </div>
    )
}
export default ClassTool;