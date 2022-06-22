import {
    Card,
    CardGroup,
    CardBody,
    CardBody,
    CardImg,
    CardTitle,
    Button,
    CardGroup
} from 'reactstrap'


export default function Course_Card() {
    return (
        <div>


            <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>




        </div>
    )
} 