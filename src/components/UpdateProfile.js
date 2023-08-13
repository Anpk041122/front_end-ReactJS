import { Button, Col, Form, FormGroup, Row } from "react-bootstrap"
import '../style/updateProfile.css'
import {  useEffect, useState } from "react"
import { authAPI, endpoints } from "../configs/API"
import cookie from "react-cookies";
import moment from "moment";
import { ProfileContext } from "../configs/MyContext";
import UserProfile from "./UserProfile";
import { Navigate } from "react-router-dom";
import myUserReducer from "../reducers/MyUserReducer";

const UpdateProfile = () => {
    const [isProfile, setIsProfile] = useState(false)
    const [patient, setPatient] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [dob, setDob] = useState()
    const [gender, setGender] = useState('');
    let profile 

    useEffect(() => {
        const loadPatient = async () => {
            
            let id = cookie.load('patient_id')
            
            if(id !== undefined) {
                let endpoint = `${endpoints['patient']}${id}`
                
                let res = await authAPI().get(endpoint) 

                setPatient(res.data)
                setIsProfile(true)
            }   
        }

        loadPatient()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(name !== "" && email !== "" && phone !== "" && address !== "" && dob !== "" && gender !== "")
        {
            let user = cookie.load('current-user')
            const newDob = moment(dob).format("YYYY-MM-DD");
            let formdata = new FormData();
            formdata.append("patient_name", name.toString());
            formdata.append("email", email.toString());
            formdata.append("phone_number", phone.toString());
            formdata.append("address", address.toString());
            formdata.append("date_of_birth", newDob.toString());
            formdata.append("gender", gender.toString());
            formdata.append("user", user.id.toString());

            let res = await authAPI().post(endpoints['patient'], formdata)
            let patient_id = res.data.id

            // Chia thông điệp thành các khối nhỏ hơn (mỗi khối có độ dài 16 ký tự)
            cookie.save("patient_id", patient_id)

            window.location.reload();
        } else {
            alert('Bạn phải điền đầy đủ các trường')
        }
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };


    if(isProfile)
    {  
        profile = (
            <ProfileContext.Provider value ={[patient, setPatient]}>
                 <UserProfile />
            </ProfileContext.Provider>
        )
    } else {
        profile= (
            <div className='container'>
                <Form id='form-user-profile'>
                    <h3 className='header-user-profile '>Cập nhật hồ sơ bệnh nhân</h3>
                    <Row>
                        <Col md={5}>
                        {/* name field */}
                            <FormGroup controlId="formPatientName">
                                <Form.Label>Họ và Tên</Form.Label>
                                <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Họ và tên" />
                            </FormGroup>
                        </Col>
                        <Col  md={7}>
                        {/* phone field */}
                            <FormGroup controlId="formPhone">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control onChange={e => setPhone(e.target.value)} type="text" placeholder="Số điện thoại" />
                            </FormGroup>
                        </Col>
                    </Row>
    
                    {/* Email Field */}
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)} type="text" placeholder="Mail" />
                    </Form.Group>
    
                    {/* Address Field */}
                    <Form.Group controlId="formAddress">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control onChange={e => setAddress(e.target.value)} type="text" placeholder="Địa chỉ" />
                    </Form.Group>
    
                    {/* Date of birth */}
                    <Row>
                        <Col md={5}>
                            <Form.Group  controlId="formDateOfBirth">
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control format="yyyy/MM/dd" onChange={e => setDob(e.target.value)} type="date"  />
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                                <Form.Group controlId="formGender" className="gender">
                                    <Form.Label>Giới tính</Form.Label>
                                    <Row>
                                        <Col>
                                        <Form.Check
                                            type="radio"
                                            label="Nam"
                                            name="formGender"
                                            id="male"
                                            value="Nam"
                                            checked={gender === "Nam"} // kiểm tra xem giới tính nam đã được chọn hay chưa
                                            onChange={handleGenderChange}
                                        /></Col>
                                        <Col>
                                        <Form.Check
                                            type="radio"
                                            label="Nữ"
                                            name="formGender"
                                            id="female"
                                            value="Nữ"
                                            checked={gender === "Nữ"} // kiểm tra xem giới tính nữ đã được chọn hay chưa
                                            onChange={handleGenderChange}
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Check
                                            type="radio"
                                            label="Khác"
                                            name="formGender"
                                            id="other"
                                            value="Khác"
                                            checked={gender === "Khác"} // kiểm tra xem giới tính khác đã được chọn hay chưa
                                            onChange={handleGenderChange}
                                            />
                                        </Col>
                                    </Row>
                            
    
                                </Form.Group>
                        </Col>
                    </Row>
    
                    <Button onClick={handleSubmit} variant="primary" type="submit" style={{marginTop: "20px"}}>
                        Submit
                    </Button>
                    </Form>
            </div>
        )
    }

    return (
        <>
            {profile}
        </>
    )
}

export default UpdateProfile