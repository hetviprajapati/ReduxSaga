import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './display.css'
import { fetchUser } from '../../../Action/fetchUserAction';

function Dispaly() {
    debugger;

    const fetch = useSelector(state => state.fetch)
    console.log("fetch", fetch.result)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, []);

    return (
        fetch.result.length !== 0 ?
        <center>
            <div>
                <Table striped style={{width:'400px'}}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Dob</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fetch.result.map(res => {
                                const dob =new Date(res.dob);
                                return(
                                    <tr key={res._id}>
                                        <td>{res.name}</td>
                                        <td>{res.email}</td>
                                        <td>{(dob).toDateString()}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            </center>
            : null
    )
}

export default Dispaly
