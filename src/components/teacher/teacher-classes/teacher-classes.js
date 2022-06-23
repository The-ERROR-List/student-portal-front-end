// import ClassList  from './classList/classList'
import axios from 'axios';
import cookie from 'react-cookies';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle, CardText, Button, CardBody, CardImg } from "reactstrap";

import { Link } from 'react-router-dom';
const TeacherClasses = (props) => {
    const [classes,setClasses] =useState([])
    let response;

    let params = useParams()
    const fetchItems = async () => {

         response = await axios.get(
            `http://localhost:3001/get-all-classes-for-course-for-teacher/${params.id}/${cookie.load("id")}`,
            { headers: { Authorization: `Bearer ${cookie.load("token")}` }, }
        );
        console.log(response.data.classes)
        setClasses(...classes,response.data)
    };

    useEffect(() => {
        if(cookie.load('role') === 'teacher'){
            fetchItems()
            
        }
        console.log('params', params.id);
        console.log('idteacher', cookie.load('id'))
    }, [])


    return (
        <div>
            {console.log('resss', classes)}
            <h1>Hello i'm teacher classes</h1>
            <Row style={{ marginTop: "20px" }}>

                {
                    classes.classes ?
                    classes.classes.map((classforTeacher, index) => {
                            return (
                                <>
                                    <Link to={`/class/${classforTeacher.id}`}>

                                        <Col key={index} sm="3">
                                            <Card key={index} body>
                                                <CardTitle style={{ fontWeight: 500 }} tag="h4">
                                                    {classforTeacher.className}
                                                </CardTitle>
                                                <CardText>
                                                    {classforTeacher.classTime}
                                                </CardText>
                                            </Card>
                                        </Col>
                                    </Link>

                                </>


                            )

                        }) : null
                }

            </Row>
        </div>
        
    )
};
export default TeacherClasses;
