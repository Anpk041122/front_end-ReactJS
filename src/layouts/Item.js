import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../style/item.css'
const Item = ({obj}) => {
    let url =  `/medicine/${obj.id}`
    return (
        <>
            <Card id="card-obj">
                <Card.Img variant="top" src={obj.image} id="img-obj"/>
                <Card.Body>
                    <Card.Title className="title-obj">{obj.medicine_name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Link className="btn-obj" to={url}>Xem chi tiết</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item