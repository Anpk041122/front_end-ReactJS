import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Nav, NavDropdown, Navbar } from "react-bootstrap"
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faUser, faSignOut, faRegistered, faSignIn }from '@fortawesome/free-solid-svg-icons'
import '../style/header.css';
import { useContext, useState } from 'react';
import { MyUserContext } from '../configs/MyContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from '../components/Headers/AdminHeader';
import UserHeader from '../components/Headers/UserHeader';
import DoctorHeader from '../components/Headers/DoctorHeader';
import NurseHeader from '../components/Headers/NurseHeader';


const Header = () => {
  // eslint-disable-next-line
  const [user, dispatch] = useContext(MyUserContext)
  const [showDropdown, setShowDropdown] = useState(false);

  const logout = () => {
    dispatch({"type": "logout"})
}
  const clickUserIcon = () => {
    setShowDropdown(!showDropdown);
  }  

  let header
  let userInfo
  
  header = (
    <Nav className="mr-auto nav-link">
      <Link className="nav-link" to='/home_patient'>Trang Chủ</Link>
    </Nav>
  )

  userInfo = (
    <>
      <Link to='/login' className='button-link'>
        Đăng nhập
      <FontAwesomeIcon icon={faSignIn}  style={{marginLeft: "5px"}} size="xs" id = "nav-icon"/></Link>
      <Link to="/register" className='button-link'>Đăng Ký 
      <FontAwesomeIcon style={{marginLeft: "5px"}} icon={faRegistered}  size="xs" id = "nav-icon"/></Link>
    </>
  )

  if(user !== null) {
    if(user.is_staff) {
        header = <AdminHeader />
    } else if(user.is_doctor) {
        header = <DoctorHeader /> 
    } else if(user.is_nurse) {
      header = <NurseHeader /> 
    } else {
      header = <UserHeader />
    }
    userInfo = (
      <>
        <FontAwesomeIcon icon={faUser}  size="lg" id = "nav-icon" className='icon-user' onClick={clickUserIcon}/> 
        <NavDropdown  id="basic-nav-dropdown" className='icon-dropdown' show={showDropdown} onClick={clickUserIcon}>
            <NavDropdown.Item href="#action/3.1">Cài đặt chung</NavDropdown.Item>
            <NavDropdown.Item href="update_profile">Hồ Sơ</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tài Khoản</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/home_patient" onClick={logout}>
              SignOut
              <FontAwesomeIcon icon={faSignOut}  size="lg" id = "nav-icon"/> 
            </NavDropdown.Item>
          </NavDropdown> 
      </>
    )
  }

  return (
      <div id='header'>
          <Navbar bg="light" expand="lg"  className='cover-area'>
              <Navbar.Brand href="#home" className='brand-left'></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  {header}
              </Navbar.Collapse>
              {userInfo}
          </Navbar>
      </div>
    )
}

export default Header