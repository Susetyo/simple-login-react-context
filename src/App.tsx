import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Auth/Profile';
import EditProfile from './components/Auth/EditProfile';
import {TextContextProvider} from './context/TextContext';

function App() {
  return (
    <BrowserRouter>
      <TextContextProvider>
        <Route 
          exact
          path="/"
          component={Login}
          ></Route>  
        <Route
          exact
          path="/profile"
          component={Profile}
          ></Route>
        <TextContextProvider isParent={false}>
          <Route 
            exact
            path="/profile/edit-profile"
            component={EditProfile}
          ></Route>
        </TextContextProvider>
      </TextContextProvider>
    </BrowserRouter>
  );
}

export default App;
