import React from 'react'
import {Route,Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

function getExtractedJson({component,cprivate,crole,actions,login,...rest})
{
     return rest;
}

function CustomRoute(props) {
 debugger;
   const login=useSelector(state => state.login)
   const rest=getExtractedJson(props);
   const isUserLoggedIN=login.token?login.token!=='':false;
   const userCurrentRole=login.role;
   const {component,cprivate}=props;
   const Component=component;
   let redirectTo=undefined;

   if(isUserLoggedIN && rest.path==='/' && userCurrentRole==='admin') 
      redirectTo='/display';
   else if(!isUserLoggedIN && cprivate && !userCurrentRole)
       redirectTo='/';  
    return (
        <Route
        {...rest}
        render={props=>(
            (redirectTo)?<Redirect to={{pathname:redirectTo,state:{from:props.location}}}/>:<Component {...props}/>
        )}
       />
    )
}

export default CustomRoute
