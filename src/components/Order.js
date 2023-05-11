import { Button, Col, Container, Form, FormGroup, Row, Table } from "react-bootstrap"
import '../style/order.css'
import { useEffect, useState } from "react"
import { authAPI, endpoints } from "../configs/API"
import MedicineSelect from "./MedicineSelect"

const Order = () => {
    const [symp, setSymp] = useState('')
    const [diag, setDiag] = useState('')
    const [dosage, setDosage] = useState('')
    const [instruc, setInstruc] = useState('')
    const [quan, setQuan] = useState('')
    const [patients, setPatients] = useState()
    const [searchPatient, setSearchPatient] = useState('')
    const [rows, setRows] = useState([
        {
          id: 1,
          medicine: "",
          dosage: "",
          instruction: "",
          total: "",
          disabled: true
        }
    ]);
    const [numRows, setNumRows] = useState(1);
    const canDelete = rows.length > 1;
    useEffect(() => {
        const loadData = async () => {
            try {
                let res = await authAPI().get(endpoints['patient'])
                setPatients(res.data.results)
            } catch (ex) {
                alert(ex)
            }
        }

        loadData() 
    }, [])


    const handleAddRow = () => {
        setNumRows(numRows + 1);
        const newRow = {
          id: rows.length + 1,
          medicine: "",
          dosage: "",
          instruction: "",
          total: "",
          disabled: true
        };
        const newRows = [...rows, newRow];
        newRows[rows.length - 1].disabled = false;
        setRows(newRows);
        console.log('handleAddRow')
    }

    const handleDeleteRow = (id) => {
        const newRows = rows.filter((row) => row.id !== id);
        setRows(newRows);
        console.log('handleDeleteRow')
    };
      
    console.log("adasdsa")
    return (
        <div id="order-container">
            <Container id='form-order'>
                <h1 id='header-order'>Toa Thuốc</h1>
                {/* Medical History */}
                <Form>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId="formPatientName">
                                <Form.Label>Tên bệnh nhân</Form.Label>
                                <Form.Control type="text" placeholder="...." />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Form.Group controlId="formSymptoms">
                                <Form.Label>Triệu chứng</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="...." 
                                    onChange={e => setSymp(e.target.value)}    
                                />
                            </Form.Group>
                        </Col>
                        <Col md={{ span: 6, offset: 1 }}>
                            <Form.Group controlId="formDiagnosis">
                                <Form.Label>Chuẩn đoán</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="..." 
                                    onChange={e => setDiag(e.target.value)} 
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>

                {/* Order Detail */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Tên thuốc</th>
                        <th>Liều lượng mỗi lần uống</th>
                        <th>Hướng dẫn sử dụng</th>
                        <th>Tổng</th>
                        <th style={{padding:"0 40px"}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                        <tr key={row.id++}>
                            <td></td>
                                <td>
                                    <MedicineSelect />
                                </td>
                                <td>
                                    <FormGroup controlId="formDosage">
                                    <Form.Control
                                        type="text"
                                        name="dosage"
                                        onChange={(e) => setDosage(e.target.value)}
                                    />
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup>
                                    <Form.Control
                                        type="text"
                                        name="instruction"
                                        onChange={(e) => setInstruc(e.target.value)}
                                    />
                                    </FormGroup>
                                </td>
                                <td>
                                <FormGroup controlId="formQuantity">
                                    <Form.Control
                                        type="text"
                                        name="quantity"
                                        onChange={(e) => setQuan(e.target.value)}
                                    />
                                </FormGroup>
                            </td>
                            <td>
                            {canDelete &&  <Button onClick={() => handleDeleteRow(row.id)}>-</Button>}
                            </td>
                        </tr>
                        ))}
                        <tr disabled={rows[rows.length - 1].disabled}>
                        <td colSpan="6">
                            <Button onClick={handleAddRow}>+</Button>
                        </td>
                        </tr>
                    </tbody>
                </Table>

                {/* Button subtmi */}
                <Button variant="primary" type="submit">
                        Submit
                    </Button>
                {/* Order */}
            </Container>
        </div>
    )
}

export default Order