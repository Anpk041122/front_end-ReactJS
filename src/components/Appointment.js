import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Col,Form, Nav, Row} from "react-bootstrap";
import '../style/appointment.css'
import {  useState } from 'react';
import cookie from 'react-cookies'
import { authAPI, endpoints } from '../configs/API';
import { useNavigate } from "react-router-dom"

const Appointment = () => { 
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const nav = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let patientId = cookie.load('patient_id');

        if(patientId !== "" && date !== undefined && time !== undefined) 
        {

            let formdata = new FormData();
            formdata.append("date", date.toString());
            formdata.append("time", time.toString());
            formdata.append("shift", "Load");
            formdata.append("state", "1");
            formdata.append("patient", patientId);
            formdata.append("is_active", "1");
            const postData = async () => {
                try {
                    let res = await authAPI().post(endpoints['appointment'], formdata)
      
                    if(res.status === 201)
                    {
                        alert('Bạn đã đặt lịch thành công.!');
                        nav("/home_patient")
                    } 
                } catch(ex) {
                    alert(ex)
                }
            }

            postData()
        } else {
            alert('Bạn phải điền đầy đủ tất cả các trường');
        }
    }

    return (
        <div className='appointment-container'>
            <Form className='form-appointment' onSubmit={handleSubmit}>
            <div id='header-appoinment'>Đặt Lịch Khám</div>
                <Row>
                    <Col>
                        {/* Date Appointment Field */}
                        <Form.Group controlId="formDate">
                            <Form.Label>Ngày khám</Form.Label>
                            <Form.Control type="date" onChange={(e) => setDate(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        {/* Time Appointment Field */}
                        <Form.Group controlId="formTime">
                            <Form.Label>Giờ khám</Form.Label>
                            <Form.Control type="time" onChange={(e) => setTime(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Button Submit Form */}
                <Button onClick={handleSubmit} variant="primary" type="submit" id='submit-form'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Appointment  