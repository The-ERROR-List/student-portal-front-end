import {
    Card,
    CardGroup,
    CardBody,
    CardImg,
    CardTitle,
    Button,
    CardSubtitle,
    CardText,
} from 'reactstrap'
import { Accordion } from "react-bootstrap";


export default function Course_Card(props) {
    return (
        <div>


            <CardGroup style={{width:"420px"}}>
                <Card >
                    <CardBody >
                        <CardTitle tag="h5" style={{textAlign:"center"}}>
                            {props.course.courseName}
                        </CardTitle>
                        {/* <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle> */}
                    </CardBody>
                    <Accordion defaultActiveKey="0" style={{width:"400px"}}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Teachers</Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Classes</Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card>
            </CardGroup>




        </div>
    )
} 