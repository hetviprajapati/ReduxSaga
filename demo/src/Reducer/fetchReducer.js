const INITIAL_STATE={
    result:[],
    err_msg:""
 }
 
 const fetchReducer = (state = INITIAL_STATE, action) => {
     debugger;
     switch (action.type) {
        case 'FETCH_REQUEST':
           return state
       case 'FETCH_SUCCESSFUL':
            return {...state,result:action.data};
        default:
           return state;
      }
   };
   
   export default fetchReducer;