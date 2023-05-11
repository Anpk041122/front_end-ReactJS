import { useContext, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate } from "react-router-dom"
import Loading from '../layouts/Loading'
import { MyUserContext } from "../configs/MyContext"
import API, { authAPI, endpoints } from '../configs/API'
import cookie from "react-cookies";
import '../style/login.css'
const Login = () => { 
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState()
    const [user, dispatch] = useContext(MyUserContext)

    const login = (evt) => {
        evt.preventDefault()
        console.log(evt.target.value)
        const process = async () => {
            try {
                
                setLoading(true)
                
                let formdata = new FormData();
                formdata.append("client_id", "Q2A6IxCqixWYmCWtiqUyrJHvSGCLBZoSzXIKpuJs");
                formdata.append("client_secret", "F84QJ1gLi56RtD5HO55ku5onOS2aNAqO5noXQuwUWAIvMiycufLBrHsJsUPKmIxJfSgZBvrOlaPvo0eW4sg8T9tt4sq52kyuW8hl49Owu7H1pRmTpF2AVIkLc6pTF3ZR");
                formdata.append("username", username);
                formdata.append("password", password);
                formdata.append("grant_type", "password");

                let res = await API.post(endpoints['login'], formdata)

                cookie.save("access_token", res.data.access_token)
                
                let user = await authAPI().get(endpoints['current-user'])
                
                cookie.save("current-user", user.data)

                
                if(!user.data.is_doctor && !user.data.is_nurse && !user.data.is_staff)
                {
                    let patient = await authAPI().get(`${endpoints['patient']}current-patient`)
                    
                    if(patient.status !== 204)
                        cookie.save("patient_id", patient.data.id)
                    else 
                        cookie.save("patient_id", undefined)
                }

                dispatch({
                    "type": "login",
                    "payload": user.data
                })
            } catch (ex) {
                setErr("Username hoặc password không chính xác!")
            } finally {
                setLoading(false)
            }
        }

        process()
    }

    if(user !== null)
    {
        if(user.is_staff || user.is_doctor || user.is_nurse)
        {
            return <Navigate to="/home_patient" />
        }
        return <Navigate to="/update_profile" />
    }

    return (
        <div id='login'>
            <Container id='form-login'>
            <h1 className="text-center text-success">ĐĂNG NHẬP NGƯỜI DÙNG</h1>

            {err?<div className="alert alert-danger">{err}</div>:""}

            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>Tên đăng nhập</Form.Label>
                    <Form.Control type="text" required
                                    value={username || ''}
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder="Tên đăng nhập..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password"   
                                    value={password || ''}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Mật khẩu" />
                </Form.Group>
                
                {loading? <Loading />:<Button type="submit" variant="primary">Đăng nhập</Button>}
                
            </Form>
            </Container>
        </div>
    )
}

export default Login