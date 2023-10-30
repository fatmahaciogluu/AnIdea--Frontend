import axios from "axios";
import { useState } from "react";

export function SignUp(){

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordRepeat, setPasswordRepeat] = useState();
    const [apiProgress, setApiProgress] = useState(false);

    const onSubmit = (event) =>{
        event.preventDefault();
        setApiProgress(true);
        axios.post('api/v1/users', {
            username,
            email,
            password
        });
    }

    const labelStyle = {
        textAlign: 'left',
        display: 'block'
    }
    
    return (
     <div className="container">
        <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2 ">
        <form className="card" onSubmit={onSubmit}>
            <div className="text-center card-header">
                <h1>Sing Up</h1>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="username" style={labelStyle}>Username</label>
                    <input id="username" 
                    className="form-control"
                    onChange={(event) => setUsername(event.target.value)}/>
                </div>
            <div className="mb-3">
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input 
                    id="email"
                    className="form-control"
                    onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" style={labelStyle}>Password</label>
                <input 
                    id="password"
                    className="form-control"
                    type ='password' 
                    onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="passwordrepeat" style={labelStyle}>Password Repeat</label>
                <input 
                    id="passwordRepeat" 
                    type ='password' 
                    className="form-control"
                    onChange={(event) => setPasswordRepeat(event.target.value)}/>
            </div>
                <button 
                    type="submit"
                    className="btn btn-primary"
                    disabled ={apiProgress || (!password || 
                        password !== passwordRepeat)}>Sign Up</button>
            </div>
             </form> 
        </div>
        
    </div>
    
    );
}