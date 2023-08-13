import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const NurseHeader = () => {
    return (
        <>
        <Nav className="mr-auto nav-link">
            <Link className="nav-link" to='/home_patient'>Trang Chủ</Link>
            <Link className="nav-link" to='/order_detail'>Xem Toa Thuốc</Link>
            <Link className="nav-link" to='/nurse/appointment'>Xem Cuộc Hẹn</Link>
            <Link className="nav-link" to='/schedule'>Lịch Trực</Link>
        </Nav>
      </>
    )
}

export default NurseHeader