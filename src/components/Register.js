import { memo, useRef, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import API, { endpoints } from "../configs/API"
import Loading from "../layouts/Loading"
import '../style/register.css'
const Register = () => {
    const [user, setUser] = useState({
        "username": "",
        "password": "",
        "confirmPassword": ""
    })
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState("")
    const avatar = useRef()
    const nav = useNavigate()

    const register = (evt) => {
        evt.preventDefault()

        const process = async () => {
            let form = new FormData()
            form.append("username", user.username)
            form.append("password", user.password)
            form.append("avatar", avatar.current.files[0])

            try {
                let res = await API.post(endpoints['user'], form, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
    
                if (res.status === 201)
                {
                    alert("Bạn đã đăng ký thành công")
                    nav("/login")
                }
            } catch(ex) {
                let e = ""
                for (let d of Object.values(ex.response.data.username))
                    e += `${d} <br />`
                setErr(e)
            } finally {
                setLoading(false)
            }
            
        }

        if (user.username === "" || user.password === "")
            setErr("Username và password bắt buộc nhập!")
        else if (user.password !== user.confirmPassword)
            setErr("Mật khẩu không khớp!")
        else if (user.username.length <= 6 || user.password.length <= 6)
            setErr("Username và password phải dài hơn 6 ký tự!")
        else if(avatar.current.files[0] === undefined) 
            setErr("Vui lòng cập nhật ảnh đại diện")
        else 
        {   
            setLoading(true)
            process()
        }
    }

    const setValue = (value, key) => {
        setUser({...user, [key]: value})
    }

    return (
        <div id='register'>
            <div id="register-form">
            <h1 className="text-center text-info">ĐĂNG KÝ NGƯỜI DÙNG</h1>

{err?<div className="alert alert-danger" dangerouslySetInnerHTML={{__html: err}}></div>:""}

<Form onSubmit={register}>
    <InputItem label="Tên đăng nhập" controlId="username" 
                value={user.username} type="text"
                setValue={e => setValue(e.target.value, "username")} />
    
    <InputItem label="Mật khẩu" controlId="password" 
                value={user.password} type="password"
                setValue={e => setValue(e.target.value, "password")} />
    
    <InputItem label="Xác nhận mật khẩu" controlId="confirm" 
                value={user.confirmPassword} type="password"
                setValue={e => setValue(e.target.value, "confirmPassword")} />

    <Form.Group className="mb-3" controlId="avatar">
        <Form.Label>Ảnh đại diện</Form.Label>
        <Form.Control type="file" ref={avatar} />
    </Form.Group>
    
    {loading? <Loading />:<Button type="submit" variant="primary">Đăng ký</Button>}
</Form>
            </div>
        </div>
    )
}

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

export default Register