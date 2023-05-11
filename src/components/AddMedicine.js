import { useEffect, useRef, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { authAPI, endpoints } from "../configs/API"
import '../style/addMedicine.css'
import * as uuid from 'uuid';
import { useNavigate } from "react-router-dom";

const AddMedicine = () => {
    const avatar = useRef()
    const [name, setName] = useState()
    const [manufacturer, setManufacturer] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [categories, setCategories] = useState()
    const [category, setCategory] = useState()
    const rdIdImage = uuid.v4().slice(0, 8);
    const nav = useNavigate()

    useEffect(() => {
        const loadCategory = async () =>{
            let res = await authAPI().get(endpoints['category'])

            setCategories(res.data)
        }

        loadCategory()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const file = avatar.current.files[0];
        const newFile = new File([file], `${rdIdImage}-${avatar.current.files[0].name}`, { type: file.type });

        let formdata = new FormData()
        formdata.append("medicine_name", name);
        formdata.append("manufacturer", manufacturer);
        formdata.append("description", description);
        formdata.append("unit_price", price);
        formdata.append("image", newFile);
        formdata.append("category", category);

        try {
            let res = await authAPI().post(endpoints['medicine'], formdata)

            if (res.status === 201)
            {
                alert("Bạn đã đăng ký thành công")
                nav("/admin_medicine/list")
            }
        } catch(ex) {
            alert(ex)            
        }

    }

    return (
        <div id='add-medicine-container'>
            <Form id='form-add-medicine'>
                <h3 id='header-add-medicine'>Thêm thuốc</h3>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Tên thuốc</Form.Label>
                        <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Nhập tên thuốc" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <select id="select-box" onChange={e => setCategory(e.target.value)}>
                        {categories != null ? categories.map((c) => (
                        <option key={c.id} value={`${c.id}`}>{c.category_name}</option>
                        )) : false}
                    </select>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Nhà điều chế</Form.Label>
                        <Form.Control onChange={e => setManufacturer(e.target.value)} type="text" placeholder="Nhập nhà điều chế" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Giá tiền</Form.Label>
                        <Form.Control onChange={e => setPrice(e.target.value)} type="text" placeholder="Nhập giá tiền" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="avatar">
                        <Form.Label>Ảnh đại diện</Form.Label>
                        <Form.Control type="file" ref={avatar} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>   
                    <Form.Group>
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control onChange={e => setDescription(e.target.value)} type="text" placeholder="Nhập mô tả" />
                    </Form.Group>      
                </Col>
            </Row>
            <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default AddMedicine