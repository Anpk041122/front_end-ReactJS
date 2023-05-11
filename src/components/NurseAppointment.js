import { useEffect, useState } from "react"
import { authAPI, endpoints } from "../configs/API"
import { Table } from "react-bootstrap"
import '../style/nurseAppointment.css'
const NurseAppointment = () => {
    const [appoinments, setAppoinments] = useState()
    const [isData, setIsData] = useState(false)

    useEffect(() => {
        const loadData = async () => { 
            let res = await authAPI().get(endpoints['appointment'])

            if(res.status === 200) 
            {
                setAppoinments(res.data)
                setIsData(true)
            }
        }

        loadData()

    }, [])

    return (
    <div id='container-list-doctor'>
        <Table striped bordered hover id='table-list-doctor'>
      <thead>
        <tr>
          <th>#</th>
          <th>Ngày</th>
          <th>Giờ</th>
          <th>Tình trạng</th>
          <th>Trạng thái</th>
          <th>Mã bệnh nhân</th>
        </tr>
      </thead>
            {isData && <tbody>
                    {appoinments.map(e => (
                        <tr key={e.id}>
                            <td></td>
                            <td>{e.date}</td>
                            <td>{e.time}</td>
                            <td>{e.shift}</td>
                            <td>{e.state}</td>
                            <td>{e.patient}</td>
                        </tr>
                    ))}
                </tbody>}
    </Table>
    </div>
    )
}

export default NurseAppointment