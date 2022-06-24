import { Row, Col, Card, CardTitle, CardText, Button, CardBody,CardImg } from "reactstrap";
import {Link} from 'react-router-dom';
import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import {getClassesInStudentsAction} from "../../redux/classesInStudents"


export default function StudentClass(){
    const selector = useSelector(state => state.classesInStudents.classesStudent)
    console.log({selector});
    const dispatch = useDispatch();
    useEffect(()=>{

        dispatch(getClassesInStudentsAction())
    },[])
return (
    <div>
        <Card >
        <CardBody>
          <CardText>
            {
              `welcome ${selector.studentName}`
            }
          </CardText>
        </CardBody>
      </Card>

      <Row style={{marginTop:"20px"}}>
        {
          selector.classes ?
          selector.classes.map((classs, i) => {
              return( <Link to={`/class-student/${classs.classId}`}>
              <Col key={i} sm="3">
                <Card key={i} body>
                <CardImg top width="100%" src={''} alt="Card image cap" />

                  <CardTitle style={{ fontWeight: 500 }} tag="h4">
                    {classs.className}
                  </CardTitle>
                </Card>
              </Col>
              </Link>)
           
          }) : null
        }
      </Row>

      

    </div>
)
}
