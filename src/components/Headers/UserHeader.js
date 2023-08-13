import { Nav} from "react-bootstrap"
import { Link } from "react-router-dom"

const UserHeader = () => {
    return (
        <>
        <Nav className="mr-auto">
            <Link className="nav-link" to='/home_patient'>Trang Chủ</Link>
            <Link className="nav-link" to='/appointment'>Đặt Lịch Khám</Link> 
            <Link className="nav-link" to='/payment'>Payment</Link>
            <Link className="nav-link">Liên hệ</Link>
        </Nav>
        </>
    )
}

export default UserHeader