import React from 'react';
import { TextContext } from '../../context/TextContext';

const EditProfile = (props:any) => {
  let { username, password, onProfileSave} = React.useContext(TextContext);  

  const [usernameEdit, setUsernameEdit] = React.useState(username);
  const [passwordEdit, setPasswordEdit] = React.useState(password);

  return (
    <div>
      <h1>Edit Profile</h1>
      <form>
        <div>
          <label>Username</label>
            <input value={usernameEdit} onChange={(e) => {
              setUsernameEdit(e.target.value)
            }}/>
        </div>
        <div>
          <label>Password</label>
          <input value={passwordEdit} onChange={(e) => {
            setPasswordEdit(e.target.value)
          }}/>
        </div>
        <button onClick={(e)=>{ 
          if(usernameEdit && passwordEdit){
            if (onProfileSave) {
              onProfileSave(usernameEdit, passwordEdit);
              props.history.push('/profile');
            }
          }else{
            e.preventDefault();
            alert('Data cannot be null');
          }
        }}>Submit</button>
        <button onClick={()=>{ props.history.push('/') }}>Cancel</button> 
      </form>
    </div>
  );
}

export default EditProfile;