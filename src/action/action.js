import axios from "axios"
import { addReducer } from "../slices/userSlice"

export const getdData = () => {
    return (dispatch) => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) => {
            dispatch(addReducer(res.data.data))
        })
    }
}