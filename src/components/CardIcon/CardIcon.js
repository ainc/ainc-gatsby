import { Card } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from 'gatsby'
import CardHeader from "react-bootstrap/esm/CardHeader"

const CardIcon = ({ cardHeader, cardText, cardIcon }) => {
//no query in this js file?
    return (
        <Card>
            <Card.Body>
                <Card.Img {cardIcon} />
                <Card.Header>
                    {cardHeader}
                </Card.Header>
                <Card.Text>
                    {cardText}
                </Card.Text>
            </Card.Body>
        </Card>
    )//Change card.img for image
}