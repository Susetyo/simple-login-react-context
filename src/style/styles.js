import {createUseStyles} from 'react-jss';
export const styleLogin = createUseStyles({
  container:{
    margin: '0 auto',
    padding: '23px',
    textAlign:'center',
  },
  formLogin:{
    padding: '23px',
    textAlign:'center',
    'box-shadow': '2px 3px #888888',
    'border': '1px #888888 solid',
    'background': 'white',
    'border-radius': '2%',
  },
  labelController:{
    display: 'block',
    width: '100%',
    'font-size': '1rem',
    'font-weight': '400',
    'line-height': '1.5',
    'color': '#495057',
    'background-color': '#fff',
    'background-clip': 'padding-box',
    'border': '1px solid #ced4da',
    'border-radius': '.25rem',
    'transition': 'border-color .15s ease-in-out,box-shadow .15s ease-in-out'
  },
  formController:{
    padding:'6px',
    '& label':{paddingRight:'2px'}
  },
  alignText:{
    textAlign:'center'
  },
  myButton: {
    'width': '100%',
    'border': 'none',
    'outline': 'none',
    'box-shadow': 'none',
    'padding': '6px',
    'color':'white',
    'border-radius': '2px',
    'background': '#32408f',
    'border-color': '#2f3c86',
    'margin-top':'10px',
    'margin-bottom':'10px'
  },
});

export const styleEditProfile = createUseStyles({
  container:{
    margin: '0 auto',
    padding: '23px',
    textAlign:'center',
  },
  formEdit:{
    padding: '23px',
    textAlign:'center',
    'box-shadow': '2px 3px #888888',
    'border': '1px #888888 solid',
    'background': 'white',
    'border-radius': '2%',
  },
  labelController:{
    display: 'block',
    width: '100%',
    'font-size': '1rem',
    'font-weight': '400',
    'line-height': '1.5',
    'color': '#495057',
    'background-color': '#fff',
    'background-clip': 'padding-box',
    'border': '1px solid #ced4da',
    'border-radius': '.25rem',
    'transition': 'border-color .15s ease-in-out,box-shadow .15s ease-in-out'
  },
  formController:{
    padding:'6px',
    '& label':{paddingRight:'2px'}
  },
  alignText:{
    textAlign:'center'
  },
  btnSuccess: {
    'width': '100%',
    'border': 'none',
    'outline': 'none',
    'box-shadow': 'none',
    'padding': '6px',
    'color':'white',
    'border-radius': '2px',
    'background': '#32408f',
    'border-color': '#2f3c86',
    'margin-top':'10px',
    'margin-bottom':'10px'
  },
  btnDanger:{
    'width': '100%',
    'border': 'none',
    'outline': 'none',
    'box-shadow': 'none',
    'padding': '6px',
    'color': 'white',
    'border-radius': '2px',
    'background': 'darkseagreen',
  },
});

export const profileStyle = createUseStyles({
  container:{
    margin: '0 auto',
    padding: '23px',
    textAlign:'center',
  },
  card:{
    padding: '23px',
    textAlign:'center',
    'box-shadow': '2px 3px #888888',
    'border': '1px #888888 solid',
    'background': 'white',
    'border-radius': '2%',
  },
  formController:{
    padding:'6px',
    '& label':{paddingRight:'2px'}
  },
  alignText:{
    textAlign:'center'
  },
  btnSuccess:{
    'width': '100%',
    'border': 'none',
    'outline': 'none',
    'box-shadow': 'none',
    'padding': '6px',
    'color':'white',
    'border-radius': '2px',
    'background': '#32408f',
    'border-color': '#2f3c86',
    'margin-top':'10px',
    'margin-bottom':'10px'
  },
  btnDanger:{
    'width': '100%',
    'border': 'none',
    'outline': 'none',
    'box-shadow': 'none',
    'padding': '6px',
    'color': 'white',
    'border-radius': '2px',
    'background': 'darkseagreen',
  }
});
