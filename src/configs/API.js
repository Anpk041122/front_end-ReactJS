import axios from "axios";
import cookie from "react-cookies";

export const endpoints = {
    'login': '/o/token/',
    'current-user': '/user/current-user/',
    'admin-current-user': '/admin_user/current-user/',
    "user": "/user/",
    "patient" : "/patient/",
    "employee": "/employee/",
    "admin_user": "/admin_user/",
    "medicine": "/medicine/",
    "list_medicine": "/list_medicine/",
    "category": "/category/",
    "medical_history": "/medical_history/",
    "appointment":"/appointment/",
    "order": "/order/",
    "order_detail":"/order_detail/",
    "schedule": "/schedule/",
    "schedule_detail":"/schedule_detail/",
}

export const authAPI = () => axios.create({
    // baseURL: "http://phaman.pythonanywhere.com/",
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        "Authorization": `Bearer ${cookie.load("access_token")}`
    }
})

// export const postToken = () => axios.create({
//     baseURL: "https://phaman0411.pythonanywhere.com/",
// })

export default axios.create({
    // baseURL: "http://phaman.pythonanywhere.com/",
    baseURL: "http://127.0.0.1:8000/",
})