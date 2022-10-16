import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css'
import { Label } from 'semantic-ui-react'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log({ email, password })
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const navigate = useNavigate();
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleApi = () => {
        console.log({ email, password })
        axios.get(`https://secure-refuge-14993.herokuapp.com/add_user?username=${email}&password=${password}&role=admin`)
            .then(result => {
                console.log(result.data)
                if (result.data.error == 0) {
                    navigate('/UserLogin')
                }
                else {
                    alert(result.data.message)
                }
            })

    }
    return (
        <div className="app">
            <Label ><h1>Sign Up</h1></Label><br />
            <input className='mail' value={email} onChange={handleEmail} type="text" placeholder='Email:' /> <br />
            <input className='mail' value={password} onChange={handlePassword} placeholder='Password:' type='password' /> <br />
            <button className='btn' onClick={handleApi}>Sign Up</button>
        </div>
    )
}

export default UserLogin;