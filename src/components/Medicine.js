import React, { useEffect, useState } from "react"
import { Button, ButtonGroup, Col, Container, InputGroup, Row , Form} from "react-bootstrap"
import {  useSearchParams,  } from "react-router-dom"
import { authAPI, endpoints } from "../configs/API"
import Loading from '../layouts/Loading'
import Item from "../layouts/Item"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/medicine.css'
import { BsSearch } from "react-icons/bs";

const Medicine = React.memo(() => {
    const [medicines, setMedicines] = useState(null)
    const [page, setPage] = useState(1)
    const [q] = useSearchParams()
    const [searchQuery, setSearchQuery] = useState()

    useEffect(() => {
        const loadCourses = async () => {
            let endpoint = `${endpoints['medicine']}?page=${page}`

            let kw = q.get("kw")
            if (kw !== null)
                endpoint = `${endpoints['medicine']}?kw=${kw}`
        
            console.log(endpoint)
            let cateId = q.get("category_id")
            if (cateId !== null)
                endpoint += `&category_id=${cateId}`

                try {
                    let res = await authAPI().get(endpoint)
                    setMedicines(res.data.results)
                } catch (ex) {
                    setPage(1)
                }
        }

        setMedicines(null)
        loadCourses()
    }, [page, q])

    const nextPage = () => {
        setPage(current => current + 1)
    }

    const prevPage = () => {
        setPage(current => current -1)
    }

    if (medicines === null)
        return <Loading />
    
    if (medicines.length === 0)
        return <div className="alert alert-info m-1">Không sản phẩm nào!</div>

    const handleSerach = () => {

        let value = encodeURIComponent(searchQuery)

        const newUrl = `${window.location.pathname}?kw=${value.toString()}`;

        window.history.pushState(null, null, newUrl);

        window.location.href = newUrl;
    }   

    const handleClickSearch = () => {
        handleSerach()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') 
            handleSerach()
    }

    const handleDelteMedicine = (id) => {
        const deleteAPI = async () => {
            await authAPI().delete(`${endpoints['medicine']}${id}`)
            
            setMedicines(medicines.filter(medicine => medicine.id !== id))
        }
        
        deleteAPI()
    }


    return (
        <div className="container">
            <ButtonGroup aria-label="paging" className="m-1 ">
                <Button onClick={prevPage} variant="primary">&lt;&lt;</Button>
                <Button onClick={nextPage} variant="success">&gt;&gt;</Button>
            </ButtonGroup>
            <InputGroup className="serach-medicine">
                <Form.Control
                    placeholder="Nhập tên thuốc ...."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={e => setSearchQuery(e.target.value)}
                    onKeyDown = {handleKeyDown}
                />
                <InputGroup.Text className="glass" onClick={handleClickSearch}><BsSearch /></InputGroup.Text>
            </InputGroup>
            <Container>
                <Row>
                    {medicines.map(c => (
                        <Col key={c.id.toString()}>
                            <Button className="icon-delete-medicine" onClick={() => handleDelteMedicine(c.id)}>&#10539;</Button>
                            <Item obj={c} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
})

export default Medicine