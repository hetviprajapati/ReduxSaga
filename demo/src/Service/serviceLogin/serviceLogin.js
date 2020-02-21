import baseService from '../baseService';

export default function Login(credentails){
    debugger
    return baseService.post('/login',credentails);
}