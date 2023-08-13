import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap'
import '../../style/listDoctor.css'
import { useEffect, useState } from 'react'
import { authAPI } from '../../configs/API'
const ListDoctor = () => {
    const [employees, setEmployees] = useState()
    const [isData, setIsData] = useState(false)
    useEffect(() => {
        const loadData = async () => {
            let res = await authAPI().get('employee')
            setEmployees(res.data)
            setIsData(true)
        }

        loadData()
    }, [])

    return (
        <div id='container-list-doctor'>
            <Table striped bordered hover id='table-list-doctor'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Tên </th>
                    <th>Email</th>
                    <th>Số điện thoại </th>
                    <th>Địa chỉ </th>
                    <th>Ngày sinh </th>
                    <th>Giới tính </th>
                    <th>Chuyên khoa </th>
                    <th>Kinh nghiệm</th>
                    <th>Vai trò</th>
                    </tr>
                </thead>
                {isData && <tbody>
                    {employees.map(e => (
                        <tr key={e.id}>
                            <td></td>
                            <td>{e.employee_name}</td>
                            <td>{e.email}</td>
                            <td>{e.phone_number}</td>
                            <td>{e.address}</td>
                            <td>{e.date_of_birth}</td>
                            <td>{e.gender}</td>
                            <td>{e.specialization}</td>
                            <td>{e.experience}</td>
                            <td>{e.role}</td>
                        </tr>
                    ))}
                </tbody>}
                </Table>
        </div>
    )
}

export default ListDoctor