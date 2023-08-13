import { useContext } from "react"
import { ProfileContext } from "../configs/MyContext"
import { Col, Container, Row } from "react-bootstrap"
import '../style/userProfile.css'
import {FiSettings} from 'react-icons/fi'
import { Link } from "react-router-dom"
import moment from "moment";

const UserProfile = () => {
    const [patient, setPatient] = useContext(ProfileContext)
    const newDob = moment(patient.date_of_birth).format("DD-MM-YYYY");
    return (
        <div className='container'>
            <Container id='form-user-profile'>
                <h3 className='header-user-profile '>Hồ sơ bệnh nhân</h3>
                <span id='update-profile' >Cập nhật<FiSettings /></span>
                {/* name field */}
                   <Row>
                        <Col  className='col-profile'>
                            <span className='profile-field'>Họ và Tên : </span>
                            <span className="profile-value">{patient.patient_name}</span>
                        </Col>
                   </Row>

                {/* phone field */}
                    <Row>
                        <Col className='col-profile'>
                            <span className='profile-field'>Số điện thoại : </span>
    
                            <span className="profile-value">{patient.phone_number}</span>
                        </Col>
                   </Row>

                {/* Email Field */}
                    <Row>
                        <Col className='col-profile'>
                            <span className='profile-field'>Email : </span>
                      
                            <span className="profile-value">{patient.email}</span>
                        </Col>
                   </Row>

                {/* Address Field */}
                    <Row>
                        <Col className='col-profile'>
                            <span className='profile-field'>Địa chỉ : </span>
                       
                            <span className="profile-value">{patient.address}</span>
                        </Col>
                   </Row>

                {/* Date of birth */}
            
                    <Row>
                        <Col className='col-profile'>
                            <span className='profile-field'>Ngày sinh : </span>
                        
                            <span className="profile-value">{newDob}</span>
                        </Col>
                   </Row>
        
                    {/* Gender */}
                   <Row>
                        <Col className='col-profile'>
                            <span className='profile-field'>Giới tính : </span>
                        
                            <span className="profile-value">{patient.gender}</span>
                        </Col>
                   </Row>
                </Container>
        </div>
    )
}

export default UserProfile