import React from "react";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import { StateContext } from "../../../context/State";
import { useContext } from "react";


const categories = [
  {
    id:1,
    name: "Teacher Side",
    description: "We are making the best  for you, Enjoy",
  },
  {
    id:2,
    name: "Student Side",
    description: "Now you can be selecting the best...  ",
  },
  {
    id:3,
    name: "Course Side",
    description: "Now you can be selecting the best...  ",
  },
  {
    id:4,
    name: "Class Side",
    description: "Now you can be selecting the best...  ",
  },
];

export default function DashboardAdmin() {
  const state = useContext(StateContext);
  return (
    <div>
      <div>
        <Row>
          {categories.map((category) => (
            <Col key={category.id} sm="3">
              <Card  body>
                <CardTitle style={{ fontWeight: 500 }} tag="h4">
                  {category.name}
                </CardTitle>
                <CardText>{category.description}</CardText>
                <Button color="primary"
                  onClick={() => state.selectCategory(category.name)}>
                  go to a {category.name}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
