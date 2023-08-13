import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const DoctorHeader = () => {
    return (
      <>
        <Nav className="mr-auto nav-link">
            <Link className="nav-link" to='/home_patient'>Trang Chủ</Link>
            <Link className="nav-link" to='/medical_hisotry'>Lịch Sử Khám Bệnh</Link>
            <Link className="nav-link" to='/doctor/order'>Thêm Toa Thuốc</Link>
            <Link className="nav-link" to='/schedule'>Lịch Trực</Link>
        </Nav>
      </>
    )
}

export default DoctorHeader