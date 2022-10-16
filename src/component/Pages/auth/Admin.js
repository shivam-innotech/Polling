import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css'
import { Label } from 'semantic-ui-react'

const Admin = () => {
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
        axios.get(`https://secure-refuge-14993.herokuapp.com/login?username=${email}&password=${password}`)
            .then(result => {
                console.log(result.data)
                if (result.data.error == 0) {
                    navigate('/AdminDashbord')
                }
                else {
                    alert("Invalid !")
                }
            })

    }
    return (
        <div className="app">
            <Label ><h1>Admin Login</h1></Label><br />
            <input className='mail' value={email} onChange={handleEmail} type="text" placeholder='Email:' /> <br />
            <input className='mail' value={password} onChange={handlePassword} placeholder='Password:' type='password' /> <br />
            <button className='btn' onClick={handleApi}>Login</button>
        </div>
    )
}

export default Admin;