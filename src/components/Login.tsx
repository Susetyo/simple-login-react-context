import React, { useState } from 'react';
import {styleLogin} from '../style/styles';
import { TextContext } from '../context/TextContext';

const Login = (props:any) => {
  const classes = styleLogin();
  const { onLogin } = React.useContext(TextContext);  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let submit = () =>{
    if(onLogin){
      onLogin(username,password)
      props.history.push('/profile') 
    }
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.formLogin}>
        <h1 style={{marginTop:'0'}}>Login</h1>
        <form>
          <div className={classes.formController}>
            <div>Username</div>
            <input className={classes.labelController} value={username} onChange={(e) => {
              setUsername(e.target.value)
            }}/>
          </div>
          <div className={classes.formController}>
            <div>Password</div>
            <input className={classes.labelController} value={password} onChange={(e) => { setPassword(e.target.value)}}/>
          </div>
          <button className={classes.myButton} onClick={submit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;