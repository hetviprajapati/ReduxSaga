import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, FormFeedback, Label, Input, Col, Card, CardBody } from 'reactstrap';
import moment from 'moment';
import './Register.css'

import { validateData,onSubmitValidate } from './validation';

function Register() {
    debugger;
    const [data, setData] = useState({ name: '', dob: '', email: '', password: '', cpassword: '', Bowler: '', txtBowler: '', Batsman: '', txtBatsman: '', team: '', profile: '' })
    const [error, setError] = useState({ name: '', dob: '', email: '', password: '', cpassword: '', role: '' ,team:'',profile:''});

    const GetData = (e) => {
        if (e.target.name === 'Bowler' || e.target.name === 'Batsman') {
            if (!e.target.checked) {
                if (e.target.name === 'Bowler')
                    setData({ ...data, Bowler: '', txtBowler: '' })
                else
                    setData({ ...data, Batsman: '', txtBatsman: '' })
            }
            else
                setData({ ...data, [e.target.name]: e.target.value })
        }
        else if (e.target.name === 'profile')
            setData({ ...data, [e.target.name]: e.target.files[0] })
        else
            setData({ ...data, [e.target.name]: e.target.value })
    }

    const validate = (e) => {
        let errorValue = validateData(e.target.name, e.target.value, data,error);
        setError({ ...errorValue });
    }

    const onSubmit = () => {
        let flag=false;
        let errorFromSubmit=onSubmitValidate(data,error);
        setError({...errorFromSubmit});
        
        errorFromSubmit.map((err)=>{
            if(err!=='')
            {
                flag=true
                return flag
            }  
            return flag
          })
        
        if(flag)
            return
        alert("Success");
    }
    return (
        <center>
            <h2>Player Registration</h2>
            <div>
                <Card className='card'>
                    <CardBody>
                        <Form >
                            <FormGroup row>
                                <Label sm={{ size: 2, offset: 2 }}><b>Name :</b></Label>
                                <Col sm={{ size: 6, offset: 1 }}>
                                    <Input invalid={error.name !== ''} type="text" name="name" value={data.name} onChange={GetData} placeholder="Enter name" onBlur={validate} />
                                    <FormFeedback className='fontsize'>{error.name}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={{ size: 2, offset: 2 }}><b>DOB : </b></Label>
                                <Col sm={{ size: 6, offset: 1 }}>
                                    <Input invalid={error.dob !== ''} type="date" name="dob" value={moment(data.dob).format("YYYY-MM-DD")} onChange={GetData} onBlur={validate} />
                                    <FormFeedback>{error.dob}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={{ size: 2, offset: 2 }}><b>Email : </b></Label>
                                <Col sm={{ size: 6, offset: 1 }}>
                                    <Input invalid={error.email !== ''} type="email" name="email" value={data.email} onChange={GetData} onBlur={validate} />
                                    <FormFeedback>{error.email}</FormFeedback>
                                    {/* {  this.state.err.validUniqueEmail?<FormFeedback>Email ID already taken</FormFeedback>:""  } */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={{ size: 2, offset: 2 }}><b>Password : </b></Label>
                                <Col sm={{ size: 6, offset: 1 }}>
                                    <Input invalid={error.password !== ''} type="password" name="password" value={data.password} onChange={GetData} onBlur={validate} />
                                    <FormFeedback>{error.password}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={{ size: 2, offset: 2 }}><b>Confirm Password : </b></Label>
                                <Col sm={{ size: 6, offset: 1 }}>
                                    <Input invalid={error.cpassword !== ''} type="password" name="cpassword" value={data.cpassword} onChange={GetData} onBlur={validate} />
                                    <FormFeedback>{error.cpassword}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={{ size: 2, offset: 2 }}><b>Role : </b></Label>
                                <Col sm={{ size: 2, offset: 1 }}>
                                    <Input invalid={error.role !== ''} type="checkbox" name='Bowler' value="Bowler" onChange={GetData} />Bowler
                                        {
                                        data.Bowler ? (
                                            <Input type='text' name='txtBowler' value={data.txtBowler} onChange={GetData} onBlur={validate} />
                                        ) : ('')
                                    }
                                </Col>
                                <Col sm={{ size: 2 }}>
                                    <Input invalid={error.role !== ''} type="checkbox" name='Batsman' value="Batsman" onChange={GetData} />Batsman
                                        {
                                        data.Batsman === 'Batsman' ? (
                                            <Input type='text' name='txtBatsman' value={data.txtBatsman} onChange={GetData} onBlur={validate} />
                                        ) : ('')
                                    }
                                    <FormFeedback>{error.role}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={{ size: 2, offset: 2 }}><b>Team : </b></Label>
                                <Col sm={{ size: 6, offset: 1 }}>
                                    <Input invalid={error.team!==''} type="select" name="team" value={data.team} onChange={GetData} onBlur={validate}>
                                        <option>--select--</option>
                                        <option>Team 1</option>
                                        <option>Team 2</option>
                                        <option>Team 3</option>
                                    </Input>
                                    <FormFeedback>Please select Team</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={{ size: 2, offset: 2 }}><b>Profile : </b></Label>
                                <Col sm={{ size: 5, offset: 1 }}>
                                    {/* {this.state.img?!this.state.profile?<img alt="" src={this.state.img} height='100' width='100'/>:<img alt="" src= {URL.createObjectURL(this.state.profile)} height='100' width='100'/>:"" */}
                                    <Input invalid={error.profile!==''} type="file" name="profile" filenme={data.profile} onChange={GetData} onBlur={validate}/>
                                <FormFeedback>{error.profile}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{ size: 8, offset: 2 }}>
                                    <Button color="dark" onClick={onSubmit}>Register</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </center>
    )
}

export default Register
