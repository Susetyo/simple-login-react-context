import React from 'react';
import { TextContext } from '../../context/TextContext';

const Profile = (props:any) => {
  let {username,password} = React.useContext(TextContext)
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <label>Username:</label> {username}
      </div>
      <div>
        <label>Password</label> {password}
      </div>
      <button onClick={()=>props.history.push('/profile/edit-profile')}>Edit Profile</button>
    </div>
  );
}

export default Profile;