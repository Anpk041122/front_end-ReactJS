import { Col, Container, Row } from "react-bootstrap"
import React from "react"
import '../style/footer.css'
import { faLocationPin} from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    return (
        <>
        <div className='footer'>
            <Container>
                <Row>
                    <Col xs={6}>
                        <Container>
                            <Row><Col><div className='brand-footer'></div></Col></Row>
                            <Row><Col ><h2 style={{fontSize : "15px"}} ><strong>Công ty Cổ phần Công nghệ BookingCare</strong></h2></Col></Row>
                            <Row>
                                <Col>
                                    <span className="bt-g bt-g-address"> 
                                        <FontAwesomeIcon icon={faLocationPin} style={{paddingRight: "5px"}}/>
                                        Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span className="bt-g bt-g-access"> 
                                        <FontAwesomeIcon icon={faCheck} style={{paddingRight: "5px"}}/>
                                        ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <div className="icon-1"></div>
                                <div className="icon-2"></div>
                            </Row>
                        </Container>
                    </Col>
                    <Col >
                        <ul className='mid-content-footer'>
                            <li>Liên hệ hợp tác</li>
                            <li>Sức khỏe doanh nghiệp</li>
                            <li>Gói chuyển đổi số doanh nghiệp</li>
                            <li>Tuyển dụng</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Điều khoản sử dụng</li>
                            <li>Chính sách Bảo mật</li>
                            <li>Quy trình hỗ trợ giải quyết khiếu nại</li>
                            <li>Quy chế hoạt động</li>
                        </ul>
                    </Col>
                    <Col >
                    <div className="right-content-footer"><strong>Trụ sở tại Hà Nội</strong>
                        <br></br>Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
                    </div>
                    <div className="right-content-footer"><strong>Văn phòng tại TP Hồ Chí Minh</strong><br></br>
                        Số 01, Hồ Bá Kiện, Phường 15, Quận 10
                    </div> 
                    <div className="right-content-footer"><strong>Hỗ trợ khách hàng</strong><br></br>
                    support@bookingcare.vn (7h30 - 18h)
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div style={{background:"#64b9e5", padding: "10px 0 70px 0" , color: 'white', textAlign: 'center'}}>
            <span>@ 2023 BookingCare.</span>
        </div>
        </>
    )
}

export default Footer