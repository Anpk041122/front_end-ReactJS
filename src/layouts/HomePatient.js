import '../style/container.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row, Col} from 'react-bootstrap'
import Footer from './Footer';
const HomePatient = () => {
    return (
        <div className='cont'>
            <Container fluid>
            <Row>
                <Col className="bg-image">
                    <div className='content-bg '>
                        <h1>
                        NỀN TẢNG Y TẾ
                        <br></br>
                        <b>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</b>
                        </h1>
                    </div>
                </Col>
            </Row>
            <Row className='owl-stage'>
                <Container>
                    <Row>
                        <Col><h2 className='intro'>Chuyên khoa phổ biến</h2></Col>
                    </Row>
                    <Row className='space'>
                        <Col>
                            <div className='pagi owl-1-img'></div>
                            <h4 className='descrip'>Tai mũi</h4>
                        </Col>
                        <Col>
                            <div className='pagi owl-1-img-2'></div>
                            <h4 className='descrip'>Thần kinh</h4>
                        </Col>
                        <Col>
                            <div className='pagi owl-1-img-3'></div>
                            <h4 className='descrip'>Tiêu hóa</h4>
                        </Col>
                        <Col>
                            <div className='pagi owl-1-img-4'></div>
                            <h4 className='descrip'>Tim mạch</h4>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row className='owl-stage'>
                <Container>
                    <Row>
                        <Col><h2 className='intro'>Cơ sở y tế nổi bật</h2></Col>
                    </Row>
                    <Row className='space'>
                        <Col>
                            <div className='pagi owl-2-img'></div>
                            <h4 className='descrip'>Bệnh viện Hữu nghị Việt Đức</h4>
                        </Col>
                        <Col>
                            <div className='pagi owl-2-img-2'></div>
                            <h4 className='descrip'>Bệnh viện Chợ Rẫy</h4>
                        </Col>
                        <Col>
                            <div className='pagi owl-2-img-3'></div>
                            <h4 className='descrip'>Phòng khám Bệnh viện Đại học Y Dược 1</h4>
                        </Col>
                        <Col>
                            <div className='pagi owl-2-img-4'></div>
                            <h4 className='descrip'>Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội 108</h4>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row className='owl-stage'>
                <Container>
                    <Row>
                        <Col><h2 className='intro'>Bác sĩ nổi bật tuần qua</h2></Col>
                    </Row>
                    <Row className='space'>
                        <Col style={{border: "1px solid #f5f5f5", margin: "0 5px 0 5px"}}>
                            <div className='pagi owl-3-img'></div>
                            <h4 className='descrip'>Tiến sĩ, Bác sĩ Phạm Chí Lăng</h4>
                            <h5 className='sub-descrip'>Cơ Xương Khớp - Chấn thương chỉnh hình</h5>
                        </Col>
                        <Col style={{border: "1px solid #f5f5f5", margin: "0 5px 0 5px"}}>
                            <div className='pagi owl-3-img-2'></div>
                            <h4 className='descrip'>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thi Hùng</h4>
                            <h5 className='sub-descrip'>Thần kinh</h5>
                        </Col>
                        <Col style={{border: "1px solid #f5f5f5", margin: "0 5px 0 5px"}}>
                            <div className='pagi owl-3-img-3'></div>
                            <h4 className='descrip'>Giáo sư, Tiến sĩ Hà Văn Quyết</h4>
                            <h5 className='sub-descrip'>Tiêu hoá - Bệnh viêm gan</h5>
                        </Col>
                        <Col style={{border: "1px solid #f5f5f5", margin: "0 5px 0 5px"}}>
                            <div className='pagi owl-3-img-4'></div>
                            <h4 className='descrip'>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Trọng Hưng</h4>
                            <h5 className='sub-descrip'>Thần kinh</h5>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row className='owl-stage'>
                <Container>
                    <Row>
                        <Col><h2 className='intro'>Cẩm nang</h2></Col>
                    </Row>
                    <Row className='space'>
                        <Col>
                            <div className='pagi owl-4-img'></div>
                        </Col>
                        <Col>
                            <h4 className='descrip'>Cảnh giác với Nấm da chân: Biểu hiện, nguyên nhân, cách chữa nấm da chân</h4>
                        </Col>
                        <Col>
                            <div className='pagi owl-4-img-2'></div>
                        </Col> 
                        <Col>
                            <h4 className='descrip'>Danh sách 6 địa chỉ khám Mắt uy tín quận 7</h4>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row className='owl-stage'>
                <Container>
                    <Row>
                        <Col><h2 className='intro'>Dành cho bác sĩ và cơ sở y tế</h2></Col>
                    </Row>
                    <Row>
                    <Col>
                            <div className='pagi owl-5-img'></div>
                        </Col>
                        <Col>
                            <h4 className='descrip'>10X Content là gì? Cách xây dựng Content SEO Y tế theo 10X Content</h4>
                        </Col>
                        <Col>
                            <div className='pagi owl-5-img-2'></div>
                        </Col> 
                        <Col>
                            <h4 className='descrip'>Cách sử dụng Google Keyword Planner để chọn từ khóa bài viết</h4>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
        <Footer />
        </div>
    )
}

export default HomePatient


