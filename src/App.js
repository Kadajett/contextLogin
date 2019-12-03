import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PrimereactStyle from "@bit/primefaces.primereact.internal.stylelinks";

import Login from './Components/Login'
import { LoginStateProvider } from './context/loginContext';
import { LoginPropsProvider } from './context/loginPropsContext';
function App() {
  // these values would come from props, or redux. Doesn't matter much, just replace the hooks here.
  let [passwordValue, setPasswordValue] = useState("");
  const [loading, setLoading] = useState(false);

  // these represent props passed in, immutable and such for fun.
  let [emailValue, setEmailValue] = useState('test@gmail.com');


  return (
    <div className="App">
      
      
      <PrimereactStyle />
      <LoginPropsProvider value={{emailValue}}>
        <LoginStateProvider value={{ passwordValue, setPasswordValue, loading, setLoading }}>
          <Login />
        </LoginStateProvider>
      </LoginPropsProvider>
    </div>
  );
}

export default App;
