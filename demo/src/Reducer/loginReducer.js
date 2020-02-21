const INITIAL_STATE={
   token:"",
   role:"",
   err_msg:""
}

const token=localStorage.getItem('token');
const role=localStorage.getItem('role');

if(token && role)
{
   INITIAL_STATE.token=token
   INITIAL_STATE.role=role
}

const reducer = (state = INITIAL_STATE, action) => {
   debugger;
    switch (action.type) {
       case 'REQUEST_FOR_LOGIN':
          return state
      case 'LOGIN_SUCCESSFUL':
         return {...state,token:action.token,role:action.role};
      case 'LOGIN_FAILED':
               return {...state,err_msg:action.err_msg};
      case 'LOGOUT_REQUEST':
         return state
      case 'LOGOUT_SUCCESSFUL':
            return {...state,token:"",role:""};
       default:
          return state;
     }
  };
  
  export default reducer;