import React, { useState } from 'react';
import {styleLogin} from '../style/styles';
import { TextContext } from '../context/TextContext';

const Login = (props:any) => {
  const classes = styleLogin();
  const { onLogin } = React.useContext(TextContext);  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className={classes.container}>
      <div className={classes.formLogin}>
        <h1 style={{marginTop:'0'}}>Login</h1>
        <form>
          <div className={classes.formController}>
            <label>Username</label>
            <input value={username} onChange={(e) => {
              setUsername(e.target.value)
            }}/>
          </div>
          <div className={classes.formController}>
            <label>Password</label>
            <input value={password} onChange={(e) => {
              setPassword(e.target.value)
            }}/>
          </div>
          <button className={classes.myButton} onClick={()=>{ 
            if(onLogin){
              onLogin(username,password)
              props.history.push('/profile') 
            }
          }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;