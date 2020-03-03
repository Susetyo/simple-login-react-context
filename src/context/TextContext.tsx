import React from 'react';

interface IState {
  username: string;
  password: string;
  onLogin?: (username: string, password: string) => void;
  onProfileSave?: (username: string, password: string) => void;
}

const initialState: IState = {
  username:"",
  password:""
}

export const TextContext = React.createContext<IState>(initialState);

interface ITextContextProviderProps {
  isParent?: boolean;
}

export const TextContextProvider: React.FC<ITextContextProviderProps> = (props) => {
  const parentContext = React.useContext(TextContext);
  const [username, setUsername] = React.useState(initialState.username);
  const [password, setPassword] = React.useState(initialState.password);

  const value: IState = {
    username,
    password,
    onLogin: (username: string, password: string) => {
      setUsername(username);
      setPassword(password);
    },
  }

  if (props.isParent===false) {
    value.username = parentContext.username 
    value.password  = parentContext.password
    
    const onProfileSave = (username: string, password: string) => {
      if(username && password){
        parentContext.username = username;
        parentContext.password = password;  
      }
    }
    
    value.onProfileSave = onProfileSave;
    
  }

  return <TextContext.Provider value={value}>{props.children}</TextContext.Provider>
};


