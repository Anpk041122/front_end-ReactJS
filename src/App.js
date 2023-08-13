import { useReducer } from 'react';
import cookie from 'react-cookies';
import './App.css';
import { MyUserContext } from './configs/MyContext';
import myUserReducer from './reducers/MyUserReducer';
import 'moment/locale/vi';
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePatient from './layouts/HomePatient'
import Header from './layouts/Header';
import { BrowserRouter, Outlet, Route, Routes   } from 'react-router-dom';  
import MedicalHistory from './components/MedicalHistory';
import { Login, Register, Appointment ,Order, Medicine } from './components/zZexports';
import UpdateProfile from './components/UpdateProfile';
import AddDoctor from './components/AdminEmployees/AddDoctor';
import ListDoctor from './components/AdminEmployees/ListDoctor';
import AddMedicine from './components/AddMedicine';
import NurseAppointment from './components/NurseAppointment';
import Payment from './components/Payment';


moment().local("vi")

function App() {
  let current = cookie.load("current-user")
  if (current === undefined)
    current = null
  const [user, dispatch] = useReducer(myUserReducer, current)
  return (
    <MyUserContext.Provider value={[user, dispatch]}>
        <BrowserRouter>
          <Header/> 
            <Outlet />
            <Routes>
              <Route path='/' element={<HomePatient />}/>
              <Route path='/home_patient' element={<HomePatient />}/>
              <Route path='/update_profile' element={<UpdateProfile />}/>
              <Route path='/appointment' element={<Appointment />} />
              <Route path='/medical_history' element={<MedicalHistory />}/>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/admin_doctor/add' element={<AddDoctor />}/>
              <Route path='/admin_doctor/list' element={<ListDoctor />} />
              <Route path='/doctor/order' element={<Order />} />
              <Route path='/admin_medicine/list' element={<Medicine />} />
              <Route path='/admin_medicine/add' element={<AddMedicine />} />
              <Route path='/nurse/appointment' element={<NurseAppointment />} />
              <Route path='/payment' element={<Payment />} />
            </Routes>
        </BrowserRouter>
    </MyUserContext.Provider>
  );
}


export default App;
