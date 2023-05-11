import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Col , Form, FormGroup, Row } from 'react-bootstrap'
import '../../style/addDoctor.css'
import { memo, useRef, useState } from 'react'
import cookie from "react-cookies";
import moment from 'moment'
import { authAPI, endpoints } from '../../configs/API'
import Loading from '../../layouts/Loading';
import { AiOutlineCheck } from "react-icons/ai";

const AddDoctor = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [dob, setDob] = useState()
    const [gender, setGender] = useState();
    const [specialization, setSpecialization] = useState();
    const [experience, setExperience] = useState();
    const [user, setUser] = useState({
        "username": "",
        "password": "",
        "confirmPassword": ""
    })
    const avatar = useRef()

    const handleSubmitProfile = async (e) => {
        e.preventDefault()
        if(name !== "" && email !== "" && phone !== "" && address !== "" && dob !== "" && gender !== "" && specialization !== "" && experience !== "" && user.username !== "" && user.password !== "")
        {
            let user_id
            let formUser = new FormData();
            formUser.append("username", user.username);
            formUser.append("password", user.password);
            formUser.append("is_doctor", "1");
            try {
                let res = await authAPI().post(endpoints['admin_user'], formUser)
                user_id = res.data.id
                
                const newDob = moment(dob).format("YYYY-MM-DD");
                let formdata = new FormData();
                
                formdata.append("employee_name",name);
                formdata.append("email", email);
                formdata.append("phone_number", phone.toString());
                formdata.append("address", address);
                formdata.append("date_of_birth", newDob.toString());
                formdata.append("gender", gender);
                formdata.append("user", user_id.toString());
                formdata.append("role", "doctor");
                formdata.append("experience", experience.toString());
                formdata.append("specialization", specialization);

                await authAPI().post(endpoints['employee'], formdata)
                alert('Bạn đã thêm thành công.!')

                } catch(ex) {
                    let err = ""
                    for (let d of Object.values(ex.response.data.username))
                        err += d
                    alert(err)
                } 
        } else {
            alert('Bạn phải điền đầy đủ các trường')
        }
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const setValue = (value, key) => {
        setUser({...user, [key]: value})
    }

    
    return (
        <div className='container'>
            <div id='form-add-doctor'>
                {/* Form user   */}
                <Form>
                    <h4 id='header-add-doctor'>Thông tin tài khoản</h4>
                   
                    <Row>
                        <Col md={5}>
                            <InputItem label="Tên đăng nhập" controlId="username" 
                                value={user.username} type="text"
                                setValue={e => setValue(e.target.value, "username")} />
                        </Col>
                        <Col md={{span : 6, offset: 1}}>
                            <InputItem label="Mật khẩu" controlId="password" 
                                value={user.password} type="password"
                                setValue={e => setValue(e.target.value, "password")} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="avatar">
                                <Form.Label>Ảnh đại diện</Form.Label>
                                <Form.Control type="file" ref={avatar} />
                            </Form.Group>
                        </Col>
                        <Col md={{span : 6, offset: 2}}>
                            <InputItem label="Xác nhận mật khẩu" controlId="confirm" 
                                value={user.confirmPassword} type="password"
                                setValue={e => setValue(e.target.value, "confirmPassword")} />
                        </Col>
                    </Row>
                </Form>

                {/* Form Employee */}
                <Form >
                    <h4 id='header-add-doctor'>Thông tin bác sĩ</h4>
                    <Row>
                        <Col md={5}>
                        {/* name field */}
                            <FormGroup >
                                <Form.Label>Họ và Tên</Form.Label>
                                <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Họ và tên" />
                            </FormGroup>
                        </Col>
                        <Col  md={7}>
                        {/* phone field */}
                            <FormGroup >
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control onChange={e => setPhone(e.target.value)} type="text" placeholder="Số điện thoại" />
                            </FormGroup>
                        </Col>
                    </Row>
    
                    {/* Email Field */}
                    <Form.Group  >
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)} type="text" placeholder="Mail" />
                    </Form.Group>
    
                    {/* Address Field */}
                    <Form.Group >
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control onChange={e => setAddress(e.target.value)} type="text" placeholder="Địa chỉ" />
                    </Form.Group>
    
                    {/* Date of birth */}
                    <Row>
                        <Col md={5}>
                            <Form.Group  >
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control format="yyyy/MM/dd" onChange={e => setDob(e.target.value)} type="date"  />
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                                <Form.Group >
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
                    <Row>
                        <Col md={5}>
                        {/* specialization field */}
                            <FormGroup >
                                <Form.Label>Chuyên khoa</Form.Label>
                                <Form.Control onChange={e => setSpecialization(e.target.value)} type="text" placeholder="Chuyên khoa" />
                            </FormGroup>
                        </Col>
                        <Col  md={5}>
                        {/* experience field */}
                            <FormGroup >
                                <Form.Label>Kinh Nghiệm</Form.Label>
                                <Form.Control onChange={e => setExperience(e.target.value)} type="text" placeholder="Kinh nghiệm" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            
                        </Col>
                    </Row>
                   <Button onClick={handleSubmitProfile} variant="primary" type="submit" style={{marginTop: "20px"}}>
                        Submit
                    </Button>

                    </Form>
                    </div>
            </div>
    )
}

export default AddDoctor


const InputItem = memo(({label, value, setValue, controlId, type}) => {
    return (
        <>
            <Form.Group className="mb-3" controlId={controlId}>
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} value={value} onChange={setValue} placeholder={label} />
            </Form.Group>
        </>
    )
})