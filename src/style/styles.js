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
    'box-shadow': '5px 10px #888888',
    'border': '1px #888888 solid',
    'background': 'azure',
    'border-radius': '2%',
  },
  formController:{
    padding:'6px',
    '& label':{paddingRight:'2px'}
  },
  alignText:{
    textAlign:'center'
  },
  myButton: {
    'border': 'none',
    'outline': 'none',
    'box-shadow': 'none',
    'padding': '6px',
    'border-radius': '2px',
    'background': 'darkseagreen'
  },
});
