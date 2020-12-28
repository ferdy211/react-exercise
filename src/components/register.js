import React from 'react'
import Login from './login'

function Register () {
    const [Name, setName] = React.useState ("");
    const [Email, setEmail] = React.useState ("");
    const [Password, setPassword] = React.useState ("")
    const [Registed, setRegisted] = React.useState (false)
    
    function Add_register(){
        /*let mydata = {
            Email : Email,
            Password : Password?
        }
        localStorage.setItem("user", [JSON.stringify(mydata)]);*/

        if (Email === "admin" && Password === "admin" ) {
            alert("Signed!!")
            setRegisted(true)
        }
        
    }
    if (Registed) {
        return (
            <div>
                <Login/>
            </div>
        )
    }
    return (
        <div>
            <h1>Sign up for free</h1>
            <input placeholder="Firstname" type="text" value= {Name} onChange = {e => setName(e.target.value)}/><br/>
            <input placeholder="Lastname" type="text"/><br/>
            <input placeholder="Email/phone" onChange = {e => setEmail(e.target.value)}/><br/>
            <input placeholder= "Password" type="password" value= {Password} onChange = {e => setPassword(e.target.value)}/><br/>
            <button onClick={()=> Add_register(Email, Password)}>Sign up</button>
        </div>
    )
}

export default Register;