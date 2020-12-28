import React from "react";
import Home from "./home"

function Login() {
    const [Email, setEmail] = React.useState ("");
    const [Password, setPassword] = React.useState ("");
    const [Loged_in,setLoged_in ] = React.useState(false);
    function SignIn(){
        /*let mydata = {
            Email : Email,
            Password : Password
        }*/

        if (Email === "admin" && Password === "admin" ) {
            alert("You has loged in!!")
            setLoged_in(true)
        } else {
            alert('Incorret email or password')
        }
    }
    if (Loged_in) {
        return (
            <div>
                <Home/>
            </div>
        )
    }
    return (
        <div>
            <h1>Aready account?? Login</h1>
            <input placeholder="Name" type="text" value= {Email} onChange = {e => setEmail(e.target.value)}/><br/>
            <input placeholder= "Password" type="password" value= {Password} onChange = {e => setPassword(e.target.value)}/><br/>
            <button onClick={()=> SignIn(Email, Password)}>Login</button>

        </div>
    )
}

export default Login;