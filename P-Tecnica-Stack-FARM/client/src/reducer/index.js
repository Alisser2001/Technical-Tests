const initialState = {
    logged: false,
    username: "",
    email: "",
    upType: "",
    allSales: [],
    sales: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN_USER":
            return {
                ...state,
                logged: true,
                username: action.payload.username,
                email: action.payload.email
            }
        case "SIGN_UP_USER":
            return{
                ...state
            }
        case "SIGN_OUT_USER":
            return{
                ...state,
                logged: false,
                username: "",
                email: "",
                allSales: [],
                sales: []
            }
        case "CHANGE_UP_TYPE":
            return{
                ...state,
                upType: action.payload
            }
        case "UPDATE_CSV":
            return{
                ...state
            }
        case "UPDATE_API":
            return{
                ...state
            }
        case "UPDATE_DB":
            return{
                ...state
            }
        case "UPDATE_SALES":
            return{
                ...state,
                allSales: action.payload,
                sales: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer; 