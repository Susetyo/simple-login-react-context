import React from 'react';
import { TextContext } from '../../context/TextContext';
import {profileStyle} from '../../style/styles';

const Profile = (props:any) => {
  const classes = profileStyle();
  let {username,password} = React.useContext(TextContext)
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h1>Profile</h1>
        <div>
          <label><strong>Username:</strong></label> 
          <div>{username}</div>
        </div>
        <div>
          <label><strong>Password:</strong></label>
          <div>{password}</div>
        </div>
        <div >
          <button className={classes.btnSuccess} onClick={()=>props.history.push('/profile/edit-profile')}>Edit</button>
          <button className={classes.btnDanger} onClick={()=>props.history.push('/')}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;