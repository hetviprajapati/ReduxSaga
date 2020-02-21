import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Table} from 'reactstrap';

import { loginUser } from '../../Action/LoginAction';

function Login() {
   
    const [data,setData] = useState({
        email:'',password:''
    });

    const GetData=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    useSelector(state => state.login)
  
    const dispatch = useDispatch()

    const onLogin=()=>{
        dispatch(loginUser(data))
    }

    return (
        <div>
            <center>
            <Table style={{width:'400px'}}>
                <tbody>
                    <tr>
                        <td>Email : </td>
                        <td><input type='email' name='email' value={data.email} onChange={GetData}></input></td>
                    </tr>
                    <tr>
                        <td>Password :  </td>
                        <td><input type='password' name='password' value={data.password} onChange={GetData}></input></td>
                    </tr>
                </tbody>
            </Table>
            <button onClick={onLogin}>Submit</button>
            </center>
        </div>
    )
}

export default Login
