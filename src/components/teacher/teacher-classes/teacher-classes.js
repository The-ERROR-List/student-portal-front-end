// import ClassList  from './classList/classList'
import axios from 'axios';
import cookie from 'react-cookies';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle, CardText, Button, CardBody, CardImg, Alert } from "reactstrap";
import { api } from '../../../redux/type'
import './teacher-class.scss'
import { Link } from 'react-router-dom';
const TeacherClasses = (props) => {
    const [classes, setClasses] = useState([])
    let response;

    let params = useParams()
    const fetchItems = async () => {

        response = await axios.get(
            `${api}/get-all-classes-for-course-for-teacher/${params.id}/${cookie.load("id")}`,
            { headers: { Authorization: `Bearer ${cookie.load("token")}` }, }
        );
        console.log(response.data.classes)
        setClasses(...classes, response.data)
    };

    useEffect(() => {
        if (cookie.load('role') === 'teacher') {
            fetchItems()

        }
        console.log('params', params.id);
        console.log('idteacher', cookie.load('id'))
    }, [])


    return (
        <div className ='teacherClass'>
            <div >
                <Alert
                    style={{
                        fontSize: "30px",
                        marginTop: "2%",
                        marginRight: "2%",
                        marginLeft: "2%",
                    }}
                > The Class In Courses</Alert>
            </div>
            {/* <Row style={{ marginTop: "20px" }}> */}
            <div className='class-cards'>

                {
                    classes.classes ?
                        classes.classes.map((classforTeacher, index) => {
                            { console.log(classforTeacher.id) }
                            return (
                                <>
                                    <Link to={`/class/${classforTeacher.id}`}>

                                        <Col key={index} sm="3">
                                            <Card key={index} body>
                                                <CardTitle style={{ fontWeight: 500 }} tag="h4">
                                                    {classforTeacher.className
                                                    }
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
            </div>

            {/* </Row> */}
        </div>

    )
};
export default TeacherClasses;
