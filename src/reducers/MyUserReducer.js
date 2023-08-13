import cookie from "react-cookies"

const myUserReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return action.payload
        case "logout":
            cookie.remove('access_token')
            cookie.remove('current-user')
            cookie.remove('patient_id')
            return null
        default:
            return state
    }
}

export default myUserReducer