import { FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST, FETCH_USERS_FAiLURE } from "./UserTypes"


const initialState = {

    loading :true,
    users:[],
    error:''
}


const userReducer = (state = initialState,action) =>{

    switch(action.type){

        case FETCH_USERS_REQUEST: return{

            ...state,
            loading : true
        }

        case FETCH_USERS_SUCCESS: return{

            ...state,
            loading : false,
            users:action.payload
        }

        case FETCH_USERS_FAiLURE: return{

            ...state,
            loading : false,
            users:[],
            error:action.payload
        }
    }
}

export default userReducer;