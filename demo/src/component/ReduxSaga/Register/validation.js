export const validateData=(name,value,data,error)=>{
    switch(name){
        case 'name':
            if(value==='' || value===undefined)
                error.name='Name is required';
            else if(! /^[a-zA-Z]+$/.test(value))
                error.name='Enter valid name';
            else
                error.name='';  
            break;
        case 'dob':
            if(value==='' || value===undefined)
                error.dob='Dob is required';
            else
                error.dob='';  
            break;
        case 'email':
            if(value==='' || value===undefined)
                error.email='Email is required';
            else if(! /[a-z0-9].*\@[a-z].*\.com/g.test(value))
                error.email='Enter valid Email';
            else
                error.email='';  
            break;    
        case 'password':
            if(value==='' || value===undefined)
                error.password='Password is required';
            else if(value.length<8)
                error.password='Password must be 8 character long';
            else
                error.password='';  
            break;
        case 'cpassword':
            if(value==='' || value===undefined)
                error.cpassword='Confirm password is required';
            else if(value!==data.password)
                error.cpassword='Password not matched';
            else
                error.cpassword='';  
            break;
        case 'txtBowler':
        case 'txtBatsman':
            if(data.txtBowler==='' && data.txtBatsman==='')   
                error.role='One of the role must be required'; 
            else
                error.role='';  
            break;
        case 'team':
            if(value==='' || value===undefined || value==='--select--')
                error.team='Please select team';
            else
                error.team='';
            break;
        default:
               break;
    }

    return error;
}

export const onSubmitValidate=(data,error)=>{
   
    if(data.name==='' && error.name==='')
       error.name='Name is required'

    if(data.dob==='' && error.dob==='')
        error.dob='Dob is required'

    if(data.email==='' && error.email==='')
       error.email='Email is required'

    if(data.password==='' && error.password==='')
       error.password='Password is required'
    
    if(data.cpassword==='' && error.cpassword==='')
       error.cpassword='Confirm password is required'

    if(data.txtBatsman==='' && data.txtBowler==='' && error.role==='')
       error.role='One of the role must be required'; 

    if(data.team==='' &&  error.team==='')
       error.team='Please select team'; 

   return error;
}