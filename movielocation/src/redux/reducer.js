import * as types from './actionTypes'
const initialState = {
 resData: [],
  isLoading: false,
  isError: false,
};
const reducer = (oldState = initialState,action) => {


  const {type,payload}=action
    switch(action.type){
            case types.GET_DATA_REQUEST:
                return{
                    ...oldState, isLoading:true,isError:false
                }

                case types.GET_DATA_SUCCESS:
                    return{
                        ...oldState, isLoading:false,isError:false,
                       resData:[...payload]
                    }

                    case types.GET_DATA_FAILURE:
                        return{
                            ...oldState, isLoading:false,isError:true
                        }
        default:





  



  
  return oldState;
};
}

export { reducer };
