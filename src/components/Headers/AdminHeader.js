import { Nav, NavDropdown } from "react-bootstrap";
import { AiOutlineMedicineBox, AiOutlineUnorderedList } from "react-icons/ai";
import { RiDeleteBin4Line } from "react-icons/ri";
import { TiSpannerOutline, TiUserAddOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const AdminHeader = (props) => {
    return (
        <>
            <Nav className="mr-auto nav-link">
              <Link className="nav-link" to='/home_patient'>Trang Chủ</Link>
      
              {/* Doctor Dropdown */}
              <NavDropdown  id="basic-nav-dropdown" title='Nhân Viên'>
                
                  <NavDropdown.Item href="/admin_doctor/list">Danh sách<AiOutlineUnorderedList className='icon' /></NavDropdown.Item>
                  <NavDropdown.Item href="/admin_doctor/add">Thêm<TiUserAddOutline className='icon'/> </NavDropdown.Item>
                 
              </NavDropdown>
      
              
              {/* Medicine Dropdown */}
              <NavDropdown  id="basic-nav-dropdown" title='Thuốc'>
                  <NavDropdown.Item href="/admin_medicine/list">Danh sách<AiOutlineUnorderedList className='icon' /></NavDropdown.Item>
                  <NavDropdown.Item href="/admin_medicine/add">Thêm<AiOutlineMedicineBox className='icon'/> </NavDropdown.Item>
                 
                  
              </NavDropdown>
      
               {/* Schedule Dropdown */}
               <NavDropdown  id="basic-nav-dropdown" title='Lịch Trực'>
                  <NavDropdown.Item href="#action/3.1">Danh sách<AiOutlineUnorderedList className='icon' /></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Thêm<AiOutlineMedicineBox className='icon'/> </NavDropdown.Item>
                 
                  
              </NavDropdown>

              {/* Position Dropdown */}
              <NavDropdown  id="basic-nav-dropdown" title='Chuyên Khoa'>
                  <NavDropdown.Item href="#action/3.1">Danh sách<AiOutlineUnorderedList className='icon' /></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Thêm<AiOutlineMedicineBox className='icon'/> </NavDropdown.Item>
              </NavDropdown>
      
              <Link className="nav-link" to='/appointment'>Thống Kê</Link>
            </Nav>
        </>
    );
}

export default AdminHeader