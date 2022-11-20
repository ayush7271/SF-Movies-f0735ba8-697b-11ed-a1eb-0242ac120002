import * as types from "./actionTypes";
const datarequest=()=>{
    return{
        type:types.GET_DATA_REQUEST
    }
}
const datasuccess=(payload)=>{
    return{
        type:types.GET_DATA_SUCCESS,
         payload
    }
}
const datafailure=()=>{
    return{
        type:types.GET_DATA_FAILURE
    }
}
export {datasuccess,datafailure,datarequest}
