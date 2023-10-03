import axios from "axios";

export function LogInUser(data){
    return async (dispatch) => {
        try {
            const json = await axios.post(`http://localhost:8000/users/login/`, data);
            const status = json.status;
            const user_data = json.data;
            if (status == 200) {
                dispatch({
                    type: "LOG_IN_USER",
                    payload: user_data
                })
            }
        } catch (e) {
            throw new Error("Error")
        }
    }
}

export function SignUpUser(data){
    return async (dispatch) => {
        try {
            const json = await axios.post("http://localhost:8000/users/signup", data);
            const res = json.data;
            if (res) {
                dispatch({
                    type: "SIGN_UP_USER"
                })
            }
        } catch (e) {
            throw new Error("Error")
        }
    }
}

export function SignOutUser(){
    return async (dispatch) => {
        try {
            dispatch({
                type: "SIGN_OUT_USER"
            })
        } catch (e) {
            throw new Error("Error")
        }
    }
}

export function ChangeType(type){
    return async (dispatch) => {
        try{
            dispatch({
                type: "CHANGE_UP_TYPE",
                payload: type
            })
        }catch(e){
            throw new Error("Error")
        }
    }
}

export function UpdateCSV(data){
    return async (dispatch) => {
        try{
            const json = await axios.post("http://localhost:8000/update/csv", data.csv[0]);
            const res = json.data;
            dispatch({
                type: "UPDATE_CSV"
            })
        }catch(e){
            throw new Error("Error")
        }
    }
}

export function UpdateAPI(data){
    return async (dispatch) => {
        try{
            const json = await axios.post("http://localhost:8000/update/api", data.apiUrl);
            const res = json.data;
            dispatch({
                type: "UPDATE_API"
            })
        }catch(e){
            throw new Error("Error")
        }
    }
}

export function UpdateDB(data){
    return async (dispatch) => {
        try{
            const json = await axios.post("http://localhost:8000/update/db", data);
            const res = json.data;
            dispatch({
                type: "UPDATE_DB"
            })
        }catch(e){
            throw new Error("Error")
        }
    }
}

export function GetSales(){
    return async (dispatch) => {
        try{
            const json = await axios.post("http://localhost:8000/sales", data);
            const res = json.data;
            dispatch({
                type: "UPDATE_SALES",
                payload: res
            })
        }catch(e){
            throw new Error("Error")
        }
    }
}