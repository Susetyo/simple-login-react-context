import React from 'react';
import { TextContext } from '../../context/TextContext';
import {styleEditProfile} from '../../style/styles';

const EditProfile = (props:any) => {
  let { username, password, onProfileSave} = React.useContext(TextContext);  
  const [usernameEdit, setUsernameEdit] = React.useState(username);
  const [passwordEdit, setPasswordEdit] = React.useState(password);
  const classes = styleEditProfile();
  const cancelButton=()=> props.history.push('/');
  const submitButton=(event:any)=>{
    if(usernameEdit && passwordEdit){
      if (onProfileSave) {
        onProfileSave(usernameEdit, passwordEdit);
        props.history.push('/profile');
      }
    }else{
      event.preventDefault();
      alert('Data cannot be null');
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.formEdit}>
        <h1>Edit Profile</h1>
        <form>
          <div className={classes.formController}>
            <div>Username</div>
              <input className={classes.labelController} value={usernameEdit} onChange={(e) => {
                setUsernameEdit(e.target.value)
              }}/>
          </div>
          <div className={classes.formController}>
            <div>Password</div>
            <input className={classes.labelController} value={passwordEdit} onChange={(e) => {
              setPasswordEdit(e.target.value)
            }}/>
          </div>
          <button className={classes.btnSuccess} onClick={submitButton}>Submit</button>
          <button className={classes.btnDanger} onClick={cancelButton}>Cancel</button> 
        </form>
      </div>
    </div>
  );
}

export default EditProfile;